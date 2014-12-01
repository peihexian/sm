package com.shinowit.dao.mapper;

import com.shinowit.entity.InStockDetail;
import com.shinowit.entity.InStockDetailExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface InStockDetailMapper {
    int countByExample(InStockDetailExample example);

    int deleteByExample(InStockDetailExample example);

    int deleteByPrimaryKey(Integer inStockDetailId);

    int insert(InStockDetail record);

    int insertSelective(InStockDetail record);

    List<InStockDetail> selectByExample(InStockDetailExample example);

    InStockDetail selectByPrimaryKey(Integer inStockDetailId);

    int updateByExampleSelective(@Param("record") InStockDetail record, @Param("example") InStockDetailExample example);

    int updateByExample(@Param("record") InStockDetail record, @Param("example") InStockDetailExample example);

    int updateByPrimaryKeySelective(InStockDetail record);

    int updateByPrimaryKey(InStockDetail record);

    List<InStockDetail> selectPage(InStockDetailExample example);

    Integer selectMaxPrimaryKeyValue();
}