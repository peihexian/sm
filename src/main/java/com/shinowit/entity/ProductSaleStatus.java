package com.shinowit.entity;

import java.io.Serializable;

public class ProductSaleStatus implements Serializable {
    private Byte statusId;

    private String statusName;

    private Boolean status;

    private String memo;

    private static final long serialVersionUID = 1L;

    public Byte getStatusId() {
        return statusId;
    }

    public void setStatusId(Byte statusId) {
        this.statusId = statusId;
    }

    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }
}