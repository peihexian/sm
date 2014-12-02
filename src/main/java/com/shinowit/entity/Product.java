package com.shinowit.entity;

import java.io.Serializable;

public class Product implements Serializable {
    private String productCode;

    private String typeCode;

    private Byte unitId;

    private Byte statusId;

    private String productName;

    private String productNameAb;

    private Float price;

    private Boolean valid;

    private String spec;

    private String describeTxt;

    private String picPath;

    private Integer clickCount;

    private String memo;

    private static final long serialVersionUID = 1L;

    private ProductSaleStatus saleStatus; //促销状态

    private ProductType productType;//产品分类

    private ProductUnit productUnit;//单位

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getTypeCode() {
        return typeCode;
    }

    public void setTypeCode(String typeCode) {
        this.typeCode = typeCode;
    }

    public Byte getUnitId() {
        return unitId;
    }

    public void setUnitId(Byte unitId) {
        this.unitId = unitId;
    }

    public Byte getStatusId() {
        return statusId;
    }

    public void setStatusId(Byte statusId) {
        this.statusId = statusId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductNameAb() {
        return productNameAb;
    }

    public void setProductNameAb(String productNameAb) {
        this.productNameAb = productNameAb;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Boolean getValid() {
        return valid;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public String getDescribeTxt() {
        return describeTxt;
    }

    public void setDescribeTxt(String describeTxt) {
        this.describeTxt = describeTxt;
    }

    public String getPicPath() {
        return picPath;
    }

    public void setPicPath(String picPath) {
        this.picPath = picPath;
    }

    public Integer getClickCount() {
        return clickCount;
    }

    public void setClickCount(Integer clickCount) {
        this.clickCount = clickCount;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public ProductSaleStatus getSaleStatus() {
        return saleStatus;
    }

    public void setSaleStatus(ProductSaleStatus saleStatus) {
        this.saleStatus = saleStatus;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public ProductUnit getProductUnit() {
        return productUnit;
    }

    public void setProductUnit(ProductUnit productUnit) {
        this.productUnit = productUnit;
    }
}