package com.shinowit.framework.security.dao;

import com.shinowit.entity.SysUser;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created on 2014/11/10.
 */
public class UserDAO {

    private JdbcTemplate jt;

    public void setJt(JdbcTemplate jt) {
        this.jt = jt;
    }

    public Set<String> getUserRoles(String loginName) {
        String sql = "select r.role_code from sys_user u, sys_role r,sys_user_role ur where u.login_name=? and u.user_id=ur.user_id and r.role_code=ur.role_code";
        return new HashSet(jt.queryForList(sql, String.class, loginName));
    }

    public Set<String> findPermissions(String loginName) {
//        String sql = "select p.permission from sys_user u, sys_role r, sys_menu p, sys_user_role ur, sys_role_to_menu rp where u.login_name=? and u.user_id=ur.user_id and r.role_code=ur.role_code and r.role_code=rp.role_code and p.menu_code=rp.menu_code";
        String sql = "select p.menu_code from sys_user u, sys_role r, sys_menu p, sys_user_role ur, sys_role_to_menu rp where u.login_name=? and u.user_id=ur.user_id and r.role_code=ur.role_code and r.role_code=rp.role_code and p.menu_code=rp.menu_code";
        return new HashSet(jt.queryForList(sql, String.class, loginName));
    }

    public SysUser findByUsername(String loginName) {
        String sql = "select user_id, login_name, login_pass, status,real_name from sys_user where login_name=?";
        List<SysUser> userList = jt.query(sql, new BeanPropertyRowMapper(SysUser.class), loginName);
        if (userList.size() == 0) {
            return null;
        }
        return userList.get(0);
    }
}
