package com.shinowit.web.menu;

import com.shinowit.dao.mapper.SysMenuMapper;
import com.shinowit.entity.SysMenu;
import com.shinowit.entity.SysMenuExample;
import com.shinowit.entity.SysUser;
import org.apache.shiro.authz.annotation.RequiresUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class MenuController {

    @Resource
    private SysMenuMapper menu_dao;

    private void querySubMenu(SysMenu parent_menu){
        SysMenuExample ex=new SysMenuExample();
        ex.createCriteria().andParentMenuCodeEqualTo(parent_menu.getMenuCode());
        List<SysMenu> sub_menus=menu_dao.selectByExample(ex);
        parent_menu.setSubMenuList(sub_menus);
        for (SysMenu menu:sub_menus){
            querySubMenu(menu);
        }
    }

    @RequiresUser
    @RequestMapping(value="/menu")
    @ResponseBody
    public SysMenu getCurrentUserMenu(HttpServletRequest request){
        SysMenu result=new SysMenu();

        HttpSession session=request.getSession(true);
        SysUser user=(SysUser)session.getAttribute("current_login_user");
        if (null==user){
            return result;
        }

        //查询顶级菜单
        List<SysMenu> top_menu=menu_dao.selectTopMenuByUser(user.getUserId());
        result.setSubMenuList(top_menu);

        for (SysMenu menu:top_menu){
            querySubMenu(menu);
        }
        return result;
    }
}
