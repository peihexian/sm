package com.shinowit.service;

import com.shinowit.dao.mapper.SysRoleMapper;
import com.shinowit.entity.SysRole;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.sql.Types;

/**
 * Created by Administrator on 2014/12/5.
 */
@Service
public class SysRoleService {

    @Resource
    private SysRoleMapper sys_role_dao;

    @Resource
    private JdbcTemplate jt;

    @Transactional
    public boolean createRole(SysRole role){
        boolean result=false;
        sys_role_dao.insert(role);
        for (String menu_id:role.getMenus()){
            jt.update("insert into sys_role_to_menu(role_code,menu_code) values (?,?)",new Object[]{role.getRoleCode(),menu_id},new int[]{Types.VARCHAR,Types.VARCHAR});
        }
        result=true;
        return result;
    }

    @Transactional
    public boolean deleteRole(String roleCode){
        boolean result=false;
        jt.update("delete from sys_role_to_menu where role_code=?",new Object[]{roleCode},new int[]{Types.VARCHAR});
        sys_role_dao.deleteByPrimaryKey(roleCode);
        result=true;
        return result;
    }

    @Transactional
    public boolean editRole(SysRole role){
        boolean result=false;
        sys_role_dao.updateByPrimaryKey(role);
        jt.update("delete from sys_role_to_menu where role_code=?",new Object[]{role.getRoleCode()},new int[]{Types.VARCHAR});
        for (String menu_id:role.getMenus()){
            jt.update("insert into sys_role_to_menu(role_code,menu_code) values (?,?)",new Object[]{role.getRoleCode(),menu_id},new int[]{Types.VARCHAR,Types.VARCHAR});
        }
        result=true;
        return result;
    }

}
