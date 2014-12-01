package com.shinowit.dao.mapper;

import com.shinowit.entity.ProductStock;
import com.shinowit.entity.ProductStockExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProductStockMapper {
    int countByExample(ProductStockExample example);

    int deleteByExample(ProductStockExample example);

    int deleteByPrimaryKey(String productCode);

    int insert(ProductStock record);

    int insertSelective(ProductStock record);

    List<ProductStock> selectByExample(ProductStockExample example);

    ProductStock selectByPrimaryKey(String productCode);

    int updateByExampleSelective(@Param("record") ProductStock record, @Param("example") ProductStockExample example);

    int updateByExample(@Param("record") ProductStock record, @Param("example") ProductStockExample example);

    int updateByPrimaryKeySelective(ProductStock record);

    int updateByPrimaryKey(ProductStock record);

    List<ProductStock> selectPage(ProductStockExample example);

    String selectMaxPrimaryKeyValue();
}