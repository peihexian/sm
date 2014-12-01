package com.shinowit.dao.mapper;

import com.shinowit.entity.SysMenu;
import com.shinowit.entity.SysMenuExample;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface SysMenuMapper {
    int countByExample(SysMenuExample example);

    int deleteByExample(SysMenuExample example);

    int deleteByPrimaryKey(String menuCode);

    int insert(SysMenu record);

    int insertSelective(SysMenu record);

    List<SysMenu> selectByExample(SysMenuExample example);

    SysMenu selectByPrimaryKey(String menuCode);

    int updateByExampleSelective(@Param("record") SysMenu record, @Param("example") SysMenuExample example);

    int updateByExample(@Param("record") SysMenu record, @Param("example") SysMenuExample example);

    int updateByPrimaryKeySelective(SysMenu record);

    int updateByPrimaryKey(SysMenu record);

    List<SysMenu> selectPage(SysMenuExample example);

    String selectMaxPrimaryKeyValue();

    @Select("select DISTINCT p.menu_code,p.menu_name,p.menu_url,p.icon_url from sys_user u, sys_role r, sys_menu p, sys_user_role ur, sys_role_to_menu rp where u.user_id=#{user_id} and u.user_id=ur.user_id and r.role_code=ur.role_code and r.role_code=rp.role_code and p.parent_menu_code is null and p.menu_code=rp.menu_code ")
    @ResultMap("com.shinowit.dao.mapper.SysMenuMapper.BaseResultMap")
    List<SysMenu> selectTopMenuByUser(int user_id);
}