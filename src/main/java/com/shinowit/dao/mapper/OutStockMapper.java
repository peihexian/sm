package com.shinowit.dao.mapper;

import com.shinowit.entity.OutStock;
import com.shinowit.entity.OutStockExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OutStockMapper {
    int countByExample(OutStockExample example);

    int deleteByExample(OutStockExample example);

    int deleteByPrimaryKey(Integer outStockId);

    int insert(OutStock record);

    int insertSelective(OutStock record);

    List<OutStock> selectByExample(OutStockExample example);

    OutStock selectByPrimaryKey(Integer outStockId);

    int updateByExampleSelective(@Param("record") OutStock record, @Param("example") OutStockExample example);

    int updateByExample(@Param("record") OutStock record, @Param("example") OutStockExample example);

    int updateByPrimaryKeySelective(OutStock record);

    int updateByPrimaryKey(OutStock record);

    List<OutStock> selectPage(OutStockExample example);

    Integer selectMaxPrimaryKeyValue();
}