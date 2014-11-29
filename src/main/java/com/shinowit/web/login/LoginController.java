package com.shinowit.web.login;

import com.shinowit.dao.mapper.SysUserMapper;
import com.shinowit.entity.SysUser;
import com.shinowit.entity.SysUserExample;
import com.shinowit.framework.security.PasswordHelper;
import com.shinowit.framework.security.exception.ValidCodeException;
import com.shinowit.framework.security.token.CustomUsernamePasswordToken;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/login")
public class LoginController {

    private static final Logger logger = Logger.getLogger(LoginController.class);

    @Resource
    private SysUserMapper sys_user_dao;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String login() {
        return "/login/login";
    }

    @RequestMapping(value = "/checklogin", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> checkLogin(SysUser login_user, HttpServletRequest request, @RequestParam("validCode") String validCode) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("msg", "用户名或者密码错误!");
        result.put("success", "true");
        result.put("status", false);

        boolean rememberMe = WebUtils.isTrue(request, FormAuthenticationFilter.DEFAULT_REMEMBER_ME_PARAM);
        String host = request.getRemoteHost();

        //构造登陆令牌环
        CustomUsernamePasswordToken token = new CustomUsernamePasswordToken(login_user.getLoginName(), login_user.getLoginPass().toCharArray(), rememberMe, host, validCode);

        try {
            //发出登陆请求
            SecurityUtils.getSubject().login(token);
            //登陆成功
            HttpSession session = request.getSession(true);
            try {
                SysUserExample ex = new SysUserExample();
                ex.createCriteria().andLoginNameEqualTo(login_user.getLoginName());
                List<SysUser> users = sys_user_dao.selectByExample(ex);
                if (users.size() > 0) {
                    SysUser user = users.get(0);
                    if (null != user) {
                        //根据输入的用户名和密码确实查到了用户信息
                        session.removeAttribute("rand");
                        session.setAttribute("current_login_user", user);
                        result.put("msg", "登录成功!");
                        result.put("status", true);
                        result.put("main_url", "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/main");
                    }
                }
            } catch (Exception e) {
                logger.error(e.getMessage(), e);
            }
            return result;
        } catch (UnknownAccountException e) {
            result.put("msg", "账号不存在!");
        } catch (IncorrectCredentialsException e) {
            result.put("msg", "用户名/密码错误!");
        } catch (ExcessiveAttemptsException e) {
            result.put("msg", "账户错误次数过多,暂时禁止登录!");
        } catch (ValidCodeException e) {
            result.put("msg", "验证码输入错误!");
        } catch (Exception e) {
            result.put("msg", "未知错误!");
        }
        return result;
    }

    @RequestMapping(value = "/logout")
    public String logout(HttpServletRequest request) {
        try{
            request.getSession(true).invalidate();
            Subject currentUser = SecurityUtils.getSubject();
            if (SecurityUtils.getSubject().getSession() != null) {
               currentUser.logout();
            }
        }catch (Exception e){}
        return "redirect:/login/";
    }

    @Resource
    private PasswordHelper passwordHelper;

    @RequestMapping(value = "/changepass")
    @ResponseBody
    public Map<String, Object> changepass() {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("msg", "用户名或者密码错误!");
        result.put("success", "true");
        result.put("status", false);

        SysUser user = sys_user_dao.selectByPrimaryKey(1);
        user.setLoginPass("a");
        String new_pass = passwordHelper.encryptPassword(user.getLoginName(), user.getLoginPass());
        user.setLoginPass(new_pass);

        sys_user_dao.updateByPrimaryKey(user);

        return result;
    }

}
