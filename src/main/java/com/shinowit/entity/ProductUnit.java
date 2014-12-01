package com.shinowit.entity;

import java.io.Serializable;

public class ProductUnit implements Serializable {
    private Byte unitId;

    private String name;

    private Boolean status;

    private String memo;

    private static final long serialVersionUID = 1L;

    public Byte getUnitId() {
        return unitId;
    }

    public void setUnitId(Byte unitId) {
        this.unitId = unitId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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