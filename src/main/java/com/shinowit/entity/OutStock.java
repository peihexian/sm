package com.shinowit.entity;

import java.io.Serializable;
import java.util.Date;

public class OutStock implements Serializable {
    private Integer outStockId;

    private Integer userId;

    private Date outTime;

    private String handlerName;

    private Byte outType;

    private Float totalMoney;

    private String remark;

    private static final long serialVersionUID = 1L;

    public Integer getOutStockId() {
        return outStockId;
    }

    public void setOutStockId(Integer outStockId) {
        this.outStockId = outStockId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getOutTime() {
        return outTime;
    }

    public void setOutTime(Date outTime) {
        this.outTime = outTime;
    }

    public String getHandlerName() {
        return handlerName;
    }

    public void setHandlerName(String handlerName) {
        this.handlerName = handlerName;
    }

    public Byte getOutType() {
        return outType;
    }

    public void setOutType(Byte outType) {
        this.outType = outType;
    }

    public Float getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Float totalMoney) {
        this.totalMoney = totalMoney;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}