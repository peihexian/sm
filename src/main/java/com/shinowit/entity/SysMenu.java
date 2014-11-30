package com.shinowit.entity;

import java.io.Serializable;
import java.util.List;

public class SysMenu implements Serializable {
    private String menuCode;

    private String menuName;

    private String menuUrl;

    private Short sortId;

    private Boolean status;

    private String parentMenuCode;

    private String iconUrl;

    private String permission;

    private String controllerFullClassname;

    private String controllerShortName;

    private String defaultViewClassname;

    private static final long serialVersionUID = 1L;

    private List<SysMenu> subMenuList;

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

    public String getParentMenuCode() {
        return parentMenuCode;
    }

    public void setParentMenuCode(String parentMenuCode) {
        this.parentMenuCode = parentMenuCode;
    }

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }

    public String getControllerFullClassname() {
        return controllerFullClassname;
    }

    public void setControllerFullClassname(String controllerFullClassname) {
        this.controllerFullClassname = controllerFullClassname;
    }

    public String getControllerShortName() {
        return controllerShortName;
    }

    public void setControllerShortName(String controllerShortName) {
        this.controllerShortName = controllerShortName;
    }

    public String getDefaultViewClassname() {
        return defaultViewClassname;
    }

    public void setDefaultViewClassname(String defaultViewClassname) {
        this.defaultViewClassname = defaultViewClassname;
    }

    public List<SysMenu> getSubMenuList() {
        return subMenuList;
    }

    public void setSubMenuList(List<SysMenu> subMenuList) {
        this.subMenuList = subMenuList;
    }
}