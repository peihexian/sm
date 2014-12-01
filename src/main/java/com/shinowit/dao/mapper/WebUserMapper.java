package com.shinowit.dao.mapper;

import com.shinowit.entity.WebUser;
import com.shinowit.entity.WebUserExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface WebUserMapper {
    int countByExample(WebUserExample example);

    int deleteByExample(WebUserExample example);

    int deleteByPrimaryKey(String userName);

    int insert(WebUser record);

    int insertSelective(WebUser record);

    List<WebUser> selectByExample(WebUserExample example);

    WebUser selectByPrimaryKey(String userName);

    int updateByExampleSelective(@Param("record") WebUser record, @Param("example") WebUserExample example);

    int updateByExample(@Param("record") WebUser record, @Param("example") WebUserExample example);

    int updateByPrimaryKeySelective(WebUser record);

    int updateByPrimaryKey(WebUser record);

    List<WebUser> selectPage(WebUserExample example);

    String selectMaxPrimaryKeyValue();
}