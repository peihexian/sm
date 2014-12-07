package com.shinowit.service;

import com.shinowit.dao.mapper.SysUserMapper;
import com.shinowit.entity.SysUser;
import com.shinowit.framework.security.PasswordHelper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Types;

/**
 * Created by Administrator on 2014/12/7.
 */
@Service
public class SysUserService {

    @Resource
    private SysUserMapper sys_user_dao;

    @Resource
    private PasswordHelper passwordHelper;

    @Resource
    private JdbcTemplate jt;

    @Transactional
    public boolean createUser(SysUser user){
        boolean result=false;

        //加密登录密码
        String new_pass = passwordHelper.encryptPassword(user.getLoginName(), user.getLoginPass());
        user.setLoginPass(new_pass);

        sys_user_dao.insert(user);

        for (String roleCode:user.getRoleCodes()){
            jt.update("insert into sys_user_role(user_id,role_code) values(?,?)",new Object[]{user.getUserId(),roleCode},new int[]{Types.INTEGER,Types.VARCHAR});
        }
        result=true;
        return  result;
    }

    @Transactional
    public boolean deleteUser(Integer user_id){
        boolean result=false;
        jt.update("delete from sys_user_role where user_id=?", new Object[]{user_id}, new int[]{Types.INTEGER});
        sys_user_dao.deleteByPrimaryKey(user_id);
        result=true;
        return  result;
    }

    @Transactional
    public boolean editUser(SysUser user){
        boolean result=false;

        //加密登录密码
        String new_pass = passwordHelper.encryptPassword(user.getLoginName(), user.getLoginPass());
        user.setLoginPass(new_pass);

        sys_user_dao.updateByPrimaryKey(user);

        jt.update("delete from sys_user_role where user_id=?", new Object[]{user.getUserId()}, new int[]{Types.INTEGER});

        for (String roleCode:user.getRoleCodes()){
            jt.update("insert into sys_user_role(user_id,role_code) values(?,?)",new Object[]{user.getUserId(),roleCode},new int[]{Types.INTEGER,Types.VARCHAR});
        }
        result=true;
        return  result;
    }

}
