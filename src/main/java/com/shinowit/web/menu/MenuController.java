package com.shinowit.web.menu;

import com.shinowit.dao.mapper.SysMenuMapper;
import com.shinowit.entity.SysMenu;
import com.shinowit.entity.SysMenuExample;
import com.shinowit.entity.SysUser;
import com.shinowit.framework.model.TreeNode;
import org.apache.shiro.authz.annotation.RequiresUser;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MenuController {

    @Resource
    private JdbcTemplate jt;

    private void querySubMenu(TreeNode<Map<String,Object>> parent_menu,Integer user_id) {
        String sql="select a.menu_code,a.menu_name,a.controller_full_classname,a.default_view_classname,a.icon_url from sys_menu a inner join sys_role_to_menu b on a.menu_code=b.menu_code \n" +
                "inner join sys_role c on b.role_code=c.role_code inner join sys_user_role d on c.role_code=d.role_code where a.parent_menu_code=? \n" +
                "and d.user_id=?";

        List<Map<String,Object>> sub_menus=jt.queryForList(sql,new Object[]{parent_menu.getData().get("menu_code").toString(), user_id},new int[]{Types.VARCHAR,Types.INTEGER});

        for (Map<String,Object> row:sub_menus){
            TreeNode node=new TreeNode();
            node.setData(row);
            parent_menu.addChild(node);
        }

    }

    @RequiresUser
    @RequestMapping(value = "/menu")
    @ResponseBody
    public Map<String,Object> getCurrentUserMenu(HttpServletRequest request) {

        Map<String,Object> result=new HashMap<String, Object>();

        HttpSession session = request.getSession(true);
        SysUser user = (SysUser) session.getAttribute("current_login_user");
        if (null == user) {
            return result;
        }

        String sql="select a.menu_code,a.menu_name,a.controller_full_classname,a.default_view_classname,a.icon_url from sys_menu a inner join sys_role_to_menu b on a.menu_code=b.menu_code \n" +
                "inner join sys_role c on b.role_code=c.role_code inner join sys_user_role d on c.role_code=d.role_code where a.parent_menu_code is null \n" +
                "and d.user_id=?";

        //查询顶级菜单
        List<Map<String,Object>> top_menu=jt.queryForList(sql,new Object[]{user.getUserId()},new int[]{Types.INTEGER});

        TreeNode root=new TreeNode();

        for (Map<String,Object> row:top_menu){
            TreeNode node=new TreeNode();
            node.setData(row);
            root.addChild(node);
            querySubMenu(node,user.getUserId());
        }

        result.put("menus",root);

        return result;
    }
}
