package com.shinowit.entity;

import java.io.Serializable;

public class SysRoleToMenu implements Serializable {
    private String roleCode;

    private String menuCode;

    private static final long serialVersionUID = 1L;

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getMenuCode() {
        return menuCode;
    }

    public void setMenuCode(String menuCode) {
        this.menuCode = menuCode;
    }
}