package com.shinowit.entity;

import java.io.Serializable;

public class InStockDetail implements Serializable {
    private Integer inStockDetailId;

    private Integer inStockId;

    private String productCode;

    private Integer num;

    private Float price;

    private static final long serialVersionUID = 1L;

    public Integer getInStockDetailId() {
        return inStockDetailId;
    }

    public void setInStockDetailId(Integer inStockDetailId) {
        this.inStockDetailId = inStockDetailId;
    }

    public Integer getInStockId() {
        return inStockId;
    }

    public void setInStockId(Integer inStockId) {
        this.inStockId = inStockId;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
}