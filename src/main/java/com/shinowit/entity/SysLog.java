package com.shinowit.entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.shinowit.framework.convert.CustomDateTimeSerializer;

import java.io.Serializable;
import java.util.Date;

public class SysLog implements Serializable {
    private Integer logId;

    private Integer userId;

    private String menuCode;

    @JsonSerialize(using = CustomDateTimeSerializer.class)
    private Date logTime;

    private String ip;

    private String content;

    private static final long serialVersionUID = 1L;

    public Integer getLogId() {
        return logId;
    }

    public void setLogId(Integer logId) {
        this.logId = logId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getMenuCode() {
        return menuCode;
    }

    public void setMenuCode(String menuCode) {
        this.menuCode = menuCode;
    }

    public Date getLogTime() {
        return logTime;
    }

    public void setLogTime(Date logTime) {
        this.logTime = logTime;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}