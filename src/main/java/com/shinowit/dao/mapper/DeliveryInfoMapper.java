package com.shinowit.dao.mapper;

import com.shinowit.entity.DeliveryInfo;
import com.shinowit.entity.DeliveryInfoExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface DeliveryInfoMapper {
    int countByExample(DeliveryInfoExample example);

    int deleteByExample(DeliveryInfoExample example);

    int deleteByPrimaryKey(String deliveryCode);

    int insert(DeliveryInfo record);

    int insertSelective(DeliveryInfo record);

    List<DeliveryInfo> selectByExample(DeliveryInfoExample example);

    DeliveryInfo selectByPrimaryKey(String deliveryCode);

    int updateByExampleSelective(@Param("record") DeliveryInfo record, @Param("example") DeliveryInfoExample example);

    int updateByExample(@Param("record") DeliveryInfo record, @Param("example") DeliveryInfoExample example);

    int updateByPrimaryKeySelective(DeliveryInfo record);

    int updateByPrimaryKey(DeliveryInfo record);

    List<DeliveryInfo> selectPage(DeliveryInfoExample example);

    String selectMaxPrimaryKeyValue();
}