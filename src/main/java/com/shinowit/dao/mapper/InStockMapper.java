package com.shinowit.dao.mapper;

import com.shinowit.entity.InStock;
import com.shinowit.entity.InStockExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface InStockMapper {
    int countByExample(InStockExample example);

    int deleteByExample(InStockExample example);

    int deleteByPrimaryKey(Integer inStockId);

    int insert(InStock record);

    int insertSelective(InStock record);

    List<InStock> selectByExample(InStockExample example);

    InStock selectByPrimaryKey(Integer inStockId);

    int updateByExampleSelective(@Param("record") InStock record, @Param("example") InStockExample example);

    int updateByExample(@Param("record") InStock record, @Param("example") InStockExample example);

    int updateByPrimaryKeySelective(InStock record);

    int updateByPrimaryKey(InStock record);

    List<InStock> selectPage(InStockExample example);

    Integer selectMaxPrimaryKeyValue();
}