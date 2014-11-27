package com.shinowit.entity;

import java.io.Serializable;

public class SysUserRole implements Serializable {
    private Integer userId;

    private String roleCode;

    private static final long serialVersionUID = 1L;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }
}