package com.shinowit.framework.security.filter;

import com.shinowit.framework.security.token.CustomUsernamePasswordToken;
import org.apache.log4j.Logger;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.apache.shiro.web.util.WebUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;


/**
 * Created on 2014/11/11.
 */
public class ValidFormAuthenticationFilter extends FormAuthenticationFilter {
    private static Logger logger = Logger.getLogger(ValidFormAuthenticationFilter.class);

    protected String getUserInputValidCode(ServletRequest request) {
        return WebUtils.getCleanParam(request, "validCode"); //从request中提取用户输入的校验码值
    }

    protected AuthenticationToken createToken(ServletRequest request, ServletResponse response) {
        String username = getUsername(request);
        String password = getPassword(request);
        String userInputValidCode = getUserInputValidCode(request);
        boolean rememberMe = isRememberMe(request);
        String host = getHost(request);

        return new CustomUsernamePasswordToken(username, password.toCharArray(), rememberMe, host, userInputValidCode);
    }

    @Override
    protected boolean executeLogin(ServletRequest request, ServletResponse response) throws Exception {
        AuthenticationToken token = createToken(request, response);
        if (token == null) {
            String msg = "createToken method implementation returned null. A valid non-null AuthenticationToken " +
                    "must be created in order to execute a login attempt.";
            throw new IllegalStateException(msg);
        }
        try {
            Subject subject = getSubject(request, response);
            subject.login(token);
            return onLoginSuccess(token, subject, request, response);
        } catch (AuthenticationException e) {
            //resetAccountLock(getUsername(request));
            return onLoginFailure(token, e, request, response);
        }
    }

}
