package com.shinowit.entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.shinowit.framework.convert.CustomDateTimeSerializer;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;

public class InStock implements Serializable {
    private Integer inStockId;

    private String providerCode;

    private Integer userId;

    private Byte inType;

    @JsonSerialize(using = CustomDateTimeSerializer.class)
    private Date inTime;

    private String handlerName;

    private Float totalMoney;

    private String memo;

    private String realName; //入库操作员真实姓名

    private String providerName;//供应商名称

    private String details;

    private List<InStockDetail> detailList;

    private static final long serialVersionUID = 1L;

    public Integer getInStockId() {
        return inStockId;
    }

    public void setInStockId(Integer inStockId) {
        this.inStockId = inStockId;
    }

    public String getProviderCode() {
        return providerCode;
    }

    public void setProviderCode(String providerCode) {
        this.providerCode = providerCode;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Byte getInType() {
        return inType;
    }

    public void setInType(Byte inType) {
        this.inType = inType;
    }

    public Date getInTime() {
        return inTime;
    }

    public void setInTime(Date inTime) {
        this.inTime = inTime;
    }

    public String getHandlerName() {
        return handlerName;
    }

    public void setHandlerName(String handlerName) {
        this.handlerName = handlerName;
    }

    public Float getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Float totalMoney) {
        this.totalMoney = totalMoney;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public List<InStockDetail> getDetailList() {
        return detailList;
    }

    public void setDetailList(List<InStockDetail> detailList) {
        this.detailList = detailList;
    }
}