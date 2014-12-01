package com.shinowit.dao.mapper;

import com.shinowit.entity.SysRoleToMenu;
import com.shinowit.entity.SysRoleToMenuExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SysRoleToMenuMapper {
    int countByExample(SysRoleToMenuExample example);

    int deleteByExample(SysRoleToMenuExample example);

    int insert(SysRoleToMenu record);

    int insertSelective(SysRoleToMenu record);

    List<SysRoleToMenu> selectByExample(SysRoleToMenuExample example);

    int updateByExampleSelective(@Param("record") SysRoleToMenu record, @Param("example") SysRoleToMenuExample example);

    int updateByExample(@Param("record") SysRoleToMenu record, @Param("example") SysRoleToMenuExample example);

    List<SysRoleToMenu> selectPage(SysRoleToMenuExample example);
}