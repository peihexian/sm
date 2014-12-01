package com.shinowit.dao.mapper;

import com.shinowit.entity.OutStockDetail;
import com.shinowit.entity.OutStockDetailExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OutStockDetailMapper {
    int countByExample(OutStockDetailExample example);

    int deleteByExample(OutStockDetailExample example);

    int deleteByPrimaryKey(Integer outStockDetailId);

    int insert(OutStockDetail record);

    int insertSelective(OutStockDetail record);

    List<OutStockDetail> selectByExample(OutStockDetailExample example);

    OutStockDetail selectByPrimaryKey(Integer outStockDetailId);

    int updateByExampleSelective(@Param("record") OutStockDetail record, @Param("example") OutStockDetailExample example);

    int updateByExample(@Param("record") OutStockDetail record, @Param("example") OutStockDetailExample example);

    int updateByPrimaryKeySelective(OutStockDetail record);

    int updateByPrimaryKey(OutStockDetail record);

    List<OutStockDetail> selectPage(OutStockDetailExample example);

    Integer selectMaxPrimaryKeyValue();
}