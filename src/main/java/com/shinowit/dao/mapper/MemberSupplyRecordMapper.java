package com.shinowit.dao.mapper;

import com.shinowit.entity.MemberSupplyRecord;
import com.shinowit.entity.MemberSupplyRecordExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MemberSupplyRecordMapper {
    int countByExample(MemberSupplyRecordExample example);

    int deleteByExample(MemberSupplyRecordExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(MemberSupplyRecord record);

    int insertSelective(MemberSupplyRecord record);

    List<MemberSupplyRecord> selectByExample(MemberSupplyRecordExample example);

    MemberSupplyRecord selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") MemberSupplyRecord record, @Param("example") MemberSupplyRecordExample example);

    int updateByExample(@Param("record") MemberSupplyRecord record, @Param("example") MemberSupplyRecordExample example);

    int updateByPrimaryKeySelective(MemberSupplyRecord record);

    int updateByPrimaryKey(MemberSupplyRecord record);

    List<MemberSupplyRecord> selectPage(MemberSupplyRecordExample example);

    Integer selectMaxPrimaryKeyValue();
}