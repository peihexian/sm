package com.shinowit.entity;

import java.io.Serializable;
import java.util.Date;

public class MemberSupplyRecord implements Serializable {
    private Integer id;

    private String userName;

    private String payAccountId;

    private String payBank;

    private String recvAccountId;

    private String recvBank;

    private String remark;

    private Float totalMoney;

    private Date supplyTime;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPayAccountId() {
        return payAccountId;
    }

    public void setPayAccountId(String payAccountId) {
        this.payAccountId = payAccountId;
    }

    public String getPayBank() {
        return payBank;
    }

    public void setPayBank(String payBank) {
        this.payBank = payBank;
    }

    public String getRecvAccountId() {
        return recvAccountId;
    }

    public void setRecvAccountId(String recvAccountId) {
        this.recvAccountId = recvAccountId;
    }

    public String getRecvBank() {
        return recvBank;
    }

    public void setRecvBank(String recvBank) {
        this.recvBank = recvBank;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Float getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Float totalMoney) {
        this.totalMoney = totalMoney;
    }

    public Date getSupplyTime() {
        return supplyTime;
    }

    public void setSupplyTime(Date supplyTime) {
        this.supplyTime = supplyTime;
    }
}