package com.shinowit.dao.mapper;

import com.shinowit.entity.MemberAddress;
import com.shinowit.entity.MemberAddressExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MemberAddressMapper {
    int countByExample(MemberAddressExample example);

    int deleteByExample(MemberAddressExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(MemberAddress record);

    int insertSelective(MemberAddress record);

    List<MemberAddress> selectByExample(MemberAddressExample example);

    MemberAddress selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") MemberAddress record, @Param("example") MemberAddressExample example);

    int updateByExample(@Param("record") MemberAddress record, @Param("example") MemberAddressExample example);

    int updateByPrimaryKeySelective(MemberAddress record);

    int updateByPrimaryKey(MemberAddress record);

    List<MemberAddress> selectPage(MemberAddressExample example);

    Integer selectMaxPrimaryKeyValue();
}