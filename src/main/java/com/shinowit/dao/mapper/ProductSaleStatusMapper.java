package com.shinowit.dao.mapper;

import com.shinowit.entity.ProductSaleStatus;
import com.shinowit.entity.ProductSaleStatusExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProductSaleStatusMapper {
    int countByExample(ProductSaleStatusExample example);

    int deleteByExample(ProductSaleStatusExample example);

    int deleteByPrimaryKey(Byte statusId);

    int insert(ProductSaleStatus record);

    int insertSelective(ProductSaleStatus record);

    List<ProductSaleStatus> selectByExample(ProductSaleStatusExample example);

    ProductSaleStatus selectByPrimaryKey(Byte statusId);

    int updateByExampleSelective(@Param("record") ProductSaleStatus record, @Param("example") ProductSaleStatusExample example);

    int updateByExample(@Param("record") ProductSaleStatus record, @Param("example") ProductSaleStatusExample example);

    int updateByPrimaryKeySelective(ProductSaleStatus record);

    int updateByPrimaryKey(ProductSaleStatus record);

    List<ProductSaleStatus> selectPage(ProductSaleStatusExample example);

    Byte selectMaxPrimaryKeyValue();
}