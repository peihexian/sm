package com.shinowit.dao.mapper;

import com.shinowit.entity.Provider;
import com.shinowit.entity.ProviderExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProviderMapper {
    int countByExample(ProviderExample example);

    int deleteByExample(ProviderExample example);

    int deleteByPrimaryKey(String providerCode);

    int insert(Provider record);

    int insertSelective(Provider record);

    List<Provider> selectByExample(ProviderExample example);

    Provider selectByPrimaryKey(String providerCode);

    int updateByExampleSelective(@Param("record") Provider record, @Param("example") ProviderExample example);

    int updateByExample(@Param("record") Provider record, @Param("example") ProviderExample example);

    int updateByPrimaryKeySelective(Provider record);

    int updateByPrimaryKey(Provider record);

    List<Provider> selectPage(ProviderExample example);

    String selectMaxPrimaryKeyValue();
}