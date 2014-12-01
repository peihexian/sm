package com.shinowit.entity;

import java.io.Serializable;

public class OutStockDetail implements Serializable {
    private Integer outStockDetailId;

    private String productCode;

    private Integer outStockId;

    private Integer num;

    private Float sellPrice;

    private Float stockPrice;

    private static final long serialVersionUID = 1L;

    public Integer getOutStockDetailId() {
        return outStockDetailId;
    }

    public void setOutStockDetailId(Integer outStockDetailId) {
        this.outStockDetailId = outStockDetailId;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public Integer getOutStockId() {
        return outStockId;
    }

    public void setOutStockId(Integer outStockId) {
        this.outStockId = outStockId;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Float getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(Float sellPrice) {
        this.sellPrice = sellPrice;
    }

    public Float getStockPrice() {
        return stockPrice;
    }

    public void setStockPrice(Float stockPrice) {
        this.stockPrice = stockPrice;
    }
}