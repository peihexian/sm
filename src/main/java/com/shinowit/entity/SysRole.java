package com.shinowit.entity;

import java.io.Serializable;

public class SysRole implements Serializable {
    private String roleCode;

    private String roleName;

    private Short sortId;

    private Boolean status;

    private static final long serialVersionUID = 1L;

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
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