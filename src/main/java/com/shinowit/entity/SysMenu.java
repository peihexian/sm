package com.shinowit.entity;

import java.io.Serializable;

public class SysMenu implements Serializable {
    private String menuCode;

    private String menuName;

    private String menuUrl;

    private Short sortId;

    private Boolean status;

    private static final long serialVersionUID = 1L;

    public String getMenuCode() {
        return menuCode;
    }

    public void setMenuCode(String menuCode) {
        this.menuCode = menuCode;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public String getMenuUrl() {
        return menuUrl;
    }

    public void setMenuUrl(String menuUrl) {
        this.menuUrl = menuUrl;
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