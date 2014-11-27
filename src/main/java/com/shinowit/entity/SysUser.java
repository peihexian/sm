package com.shinowit.entity;

import java.io.Serializable;

public class SysUser implements Serializable {
    private Integer userId;

    private String realName;

    private String loginName;

    private String loginPass;

    private String address;

    private String linkTel;

    private String qq;

    private String email;

    private String mobile;

    private Short sortId;

    private Boolean status;

    private static final long serialVersionUID = 1L;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getLoginPass() {
        return loginPass;
    }

    public void setLoginPass(String loginPass) {
        this.loginPass = loginPass;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLinkTel() {
        return linkTel;
    }

    public void setLinkTel(String linkTel) {
        this.linkTel = linkTel;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Short getSortId() {
        return sortId;
    }

    public void setSortId(Short sortId) {
        this.sortId = sortId;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}