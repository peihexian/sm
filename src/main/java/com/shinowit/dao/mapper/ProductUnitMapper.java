package com.shinowit.dao.mapper;

import com.shinowit.entity.ProductUnit;
import com.shinowit.entity.ProductUnitExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProductUnitMapper {
    int countByExample(ProductUnitExample example);

    int deleteByExample(ProductUnitExample example);

    int deleteByPrimaryKey(Byte unitId);

    int insert(ProductUnit record);

    int insertSelective(ProductUnit record);

    List<ProductUnit> selectByExample(ProductUnitExample example);

    ProductUnit selectByPrimaryKey(Byte unitId);

    int updateByExampleSelective(@Param("record") ProductUnit record, @Param("example") ProductUnitExample example);

    int updateByExample(@Param("record") ProductUnit record, @Param("example") ProductUnitExample example);

    int updateByPrimaryKeySelective(ProductUnit record);

    int updateByPrimaryKey(ProductUnit record);

    List<ProductUnit> selectPage(ProductUnitExample example);

    Byte selectMaxPrimaryKeyValue();
}