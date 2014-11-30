package com.shinowit.entity;

import java.util.ArrayList;
import java.util.List;

public class SysMenuExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    private int pageIndex;

    private int pageSize;

    private String customCriteria;

    public SysMenuExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setPageIndex(int pageIndex) {
        this.pageIndex=pageIndex;
    }

    public int getPageIndex() {
        return this.pageIndex;
    }

    public void setPageSize(int pageSize) {
        this.pageSize=pageSize;
    }

    public int getPageSize() {
        return this.pageSize;
    }

    public void setCustomCriteria(String customCriteria) {
        this.customCriteria=customCriteria;
    }

    public String getCustomCriteria() {
        return this.customCriteria;
    }

    public int getSkipRecordCount() {
        int count=(this.pageIndex-1)*this.pageSize;
        if (count<0){
             count=0;
        }
        return count;
    }

    public int getEndRecordCount() {
        return this.pageIndex*this.pageSize;
    }

    public SysMenuExample(int pageSize, int pageIndex) {
        this();
        this.pageSize=pageSize;
        this.pageIndex=pageIndex;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andMenuCodeIsNull() {
            addCriterion("menu_code is null");
            return (Criteria) this;
        }

        public Criteria andMenuCodeIsNotNull() {
            addCriterion("menu_code is not null");
            return (Criteria) this;
        }

        public Criteria andMenuCodeEqualTo(String value) {
            addCriterion("menu_code =", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeNotEqualTo(String value) {
            addCriterion("menu_code <>", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeGreaterThan(String value) {
            addCriterion("menu_code >", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeGreaterThanOrEqualTo(String value) {
            addCriterion("menu_code >=", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeLessThan(String value) {
            addCriterion("menu_code <", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeLessThanOrEqualTo(String value) {
            addCriterion("menu_code <=", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeLike(String value) {
            addCriterion("menu_code like", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeNotLike(String value) {
            addCriterion("menu_code not like", value, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeIn(List<String> values) {
            addCriterion("menu_code in", values, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeNotIn(List<String> values) {
            addCriterion("menu_code not in", values, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeBetween(String value1, String value2) {
            addCriterion("menu_code between", value1, value2, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuCodeNotBetween(String value1, String value2) {
            addCriterion("menu_code not between", value1, value2, "menuCode");
            return (Criteria) this;
        }

        public Criteria andMenuNameIsNull() {
            addCriterion("menu_name is null");
            return (Criteria) this;
        }

        public Criteria andMenuNameIsNotNull() {
            addCriterion("menu_name is not null");
            return (Criteria) this;
        }

        public Criteria andMenuNameEqualTo(String value) {
            addCriterion("menu_name =", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameNotEqualTo(String value) {
            addCriterion("menu_name <>", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameGreaterThan(String value) {
            addCriterion("menu_name >", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameGreaterThanOrEqualTo(String value) {
            addCriterion("menu_name >=", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameLessThan(String value) {
            addCriterion("menu_name <", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameLessThanOrEqualTo(String value) {
            addCriterion("menu_name <=", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameLike(String value) {
            addCriterion("menu_name like", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameNotLike(String value) {
            addCriterion("menu_name not like", value, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameIn(List<String> values) {
            addCriterion("menu_name in", values, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameNotIn(List<String> values) {
            addCriterion("menu_name not in", values, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameBetween(String value1, String value2) {
            addCriterion("menu_name between", value1, value2, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuNameNotBetween(String value1, String value2) {
            addCriterion("menu_name not between", value1, value2, "menuName");
            return (Criteria) this;
        }

        public Criteria andMenuUrlIsNull() {
            addCriterion("menu_url is null");
            return (Criteria) this;
        }

        public Criteria andMenuUrlIsNotNull() {
            addCriterion("menu_url is not null");
            return (Criteria) this;
        }

        public Criteria andMenuUrlEqualTo(String value) {
            addCriterion("menu_url =", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlNotEqualTo(String value) {
            addCriterion("menu_url <>", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlGreaterThan(String value) {
            addCriterion("menu_url >", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlGreaterThanOrEqualTo(String value) {
            addCriterion("menu_url >=", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlLessThan(String value) {
            addCriterion("menu_url <", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlLessThanOrEqualTo(String value) {
            addCriterion("menu_url <=", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlLike(String value) {
            addCriterion("menu_url like", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlNotLike(String value) {
            addCriterion("menu_url not like", value, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlIn(List<String> values) {
            addCriterion("menu_url in", values, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlNotIn(List<String> values) {
            addCriterion("menu_url not in", values, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlBetween(String value1, String value2) {
            addCriterion("menu_url between", value1, value2, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andMenuUrlNotBetween(String value1, String value2) {
            addCriterion("menu_url not between", value1, value2, "menuUrl");
            return (Criteria) this;
        }

        public Criteria andSortIdIsNull() {
            addCriterion("sort_id is null");
            return (Criteria) this;
        }

        public Criteria andSortIdIsNotNull() {
            addCriterion("sort_id is not null");
            return (Criteria) this;
        }

        public Criteria andSortIdEqualTo(Short value) {
            addCriterion("sort_id =", value, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdNotEqualTo(Short value) {
            addCriterion("sort_id <>", value, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdGreaterThan(Short value) {
            addCriterion("sort_id >", value, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdGreaterThanOrEqualTo(Short value) {
            addCriterion("sort_id >=", value, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdLessThan(Short value) {
            addCriterion("sort_id <", value, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdLessThanOrEqualTo(Short value) {
            addCriterion("sort_id <=", value, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdIn(List<Short> values) {
            addCriterion("sort_id in", values, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdNotIn(List<Short> values) {
            addCriterion("sort_id not in", values, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdBetween(Short value1, Short value2) {
            addCriterion("sort_id between", value1, value2, "sortId");
            return (Criteria) this;
        }

        public Criteria andSortIdNotBetween(Short value1, Short value2) {
            addCriterion("sort_id not between", value1, value2, "sortId");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("status is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("status is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(Boolean value) {
            addCriterion("status =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Boolean value) {
            addCriterion("status <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Boolean value) {
            addCriterion("status >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Boolean value) {
            addCriterion("status >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Boolean value) {
            addCriterion("status <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Boolean value) {
            addCriterion("status <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Boolean> values) {
            addCriterion("status in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Boolean> values) {
            addCriterion("status not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Boolean value1, Boolean value2) {
            addCriterion("status between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Boolean value1, Boolean value2) {
            addCriterion("status not between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeIsNull() {
            addCriterion("parent_menu_code is null");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeIsNotNull() {
            addCriterion("parent_menu_code is not null");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeEqualTo(String value) {
            addCriterion("parent_menu_code =", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeNotEqualTo(String value) {
            addCriterion("parent_menu_code <>", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeGreaterThan(String value) {
            addCriterion("parent_menu_code >", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeGreaterThanOrEqualTo(String value) {
            addCriterion("parent_menu_code >=", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeLessThan(String value) {
            addCriterion("parent_menu_code <", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeLessThanOrEqualTo(String value) {
            addCriterion("parent_menu_code <=", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeLike(String value) {
            addCriterion("parent_menu_code like", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeNotLike(String value) {
            addCriterion("parent_menu_code not like", value, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeIn(List<String> values) {
            addCriterion("parent_menu_code in", values, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeNotIn(List<String> values) {
            addCriterion("parent_menu_code not in", values, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeBetween(String value1, String value2) {
            addCriterion("parent_menu_code between", value1, value2, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andParentMenuCodeNotBetween(String value1, String value2) {
            addCriterion("parent_menu_code not between", value1, value2, "parentMenuCode");
            return (Criteria) this;
        }

        public Criteria andIconUrlIsNull() {
            addCriterion("icon_url is null");
            return (Criteria) this;
        }

        public Criteria andIconUrlIsNotNull() {
            addCriterion("icon_url is not null");
            return (Criteria) this;
        }

        public Criteria andIconUrlEqualTo(String value) {
            addCriterion("icon_url =", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlNotEqualTo(String value) {
            addCriterion("icon_url <>", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlGreaterThan(String value) {
            addCriterion("icon_url >", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlGreaterThanOrEqualTo(String value) {
            addCriterion("icon_url >=", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlLessThan(String value) {
            addCriterion("icon_url <", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlLessThanOrEqualTo(String value) {
            addCriterion("icon_url <=", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlLike(String value) {
            addCriterion("icon_url like", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlNotLike(String value) {
            addCriterion("icon_url not like", value, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlIn(List<String> values) {
            addCriterion("icon_url in", values, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlNotIn(List<String> values) {
            addCriterion("icon_url not in", values, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlBetween(String value1, String value2) {
            addCriterion("icon_url between", value1, value2, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andIconUrlNotBetween(String value1, String value2) {
            addCriterion("icon_url not between", value1, value2, "iconUrl");
            return (Criteria) this;
        }

        public Criteria andPermissionIsNull() {
            addCriterion("permission is null");
            return (Criteria) this;
        }

        public Criteria andPermissionIsNotNull() {
            addCriterion("permission is not null");
            return (Criteria) this;
        }

        public Criteria andPermissionEqualTo(String value) {
            addCriterion("permission =", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionNotEqualTo(String value) {
            addCriterion("permission <>", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionGreaterThan(String value) {
            addCriterion("permission >", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionGreaterThanOrEqualTo(String value) {
            addCriterion("permission >=", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionLessThan(String value) {
            addCriterion("permission <", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionLessThanOrEqualTo(String value) {
            addCriterion("permission <=", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionLike(String value) {
            addCriterion("permission like", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionNotLike(String value) {
            addCriterion("permission not like", value, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionIn(List<String> values) {
            addCriterion("permission in", values, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionNotIn(List<String> values) {
            addCriterion("permission not in", values, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionBetween(String value1, String value2) {
            addCriterion("permission between", value1, value2, "permission");
            return (Criteria) this;
        }

        public Criteria andPermissionNotBetween(String value1, String value2) {
            addCriterion("permission not between", value1, value2, "permission");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameIsNull() {
            addCriterion("controller_full_classname is null");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameIsNotNull() {
            addCriterion("controller_full_classname is not null");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameEqualTo(String value) {
            addCriterion("controller_full_classname =", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameNotEqualTo(String value) {
            addCriterion("controller_full_classname <>", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameGreaterThan(String value) {
            addCriterion("controller_full_classname >", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameGreaterThanOrEqualTo(String value) {
            addCriterion("controller_full_classname >=", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameLessThan(String value) {
            addCriterion("controller_full_classname <", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameLessThanOrEqualTo(String value) {
            addCriterion("controller_full_classname <=", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameLike(String value) {
            addCriterion("controller_full_classname like", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameNotLike(String value) {
            addCriterion("controller_full_classname not like", value, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameIn(List<String> values) {
            addCriterion("controller_full_classname in", values, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameNotIn(List<String> values) {
            addCriterion("controller_full_classname not in", values, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameBetween(String value1, String value2) {
            addCriterion("controller_full_classname between", value1, value2, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerFullClassnameNotBetween(String value1, String value2) {
            addCriterion("controller_full_classname not between", value1, value2, "controllerFullClassname");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameIsNull() {
            addCriterion("controller_short_name is null");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameIsNotNull() {
            addCriterion("controller_short_name is not null");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameEqualTo(String value) {
            addCriterion("controller_short_name =", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameNotEqualTo(String value) {
            addCriterion("controller_short_name <>", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameGreaterThan(String value) {
            addCriterion("controller_short_name >", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameGreaterThanOrEqualTo(String value) {
            addCriterion("controller_short_name >=", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameLessThan(String value) {
            addCriterion("controller_short_name <", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameLessThanOrEqualTo(String value) {
            addCriterion("controller_short_name <=", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameLike(String value) {
            addCriterion("controller_short_name like", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameNotLike(String value) {
            addCriterion("controller_short_name not like", value, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameIn(List<String> values) {
            addCriterion("controller_short_name in", values, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameNotIn(List<String> values) {
            addCriterion("controller_short_name not in", values, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameBetween(String value1, String value2) {
            addCriterion("controller_short_name between", value1, value2, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andControllerShortNameNotBetween(String value1, String value2) {
            addCriterion("controller_short_name not between", value1, value2, "controllerShortName");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameIsNull() {
            addCriterion("default_view_classname is null");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameIsNotNull() {
            addCriterion("default_view_classname is not null");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameEqualTo(String value) {
            addCriterion("default_view_classname =", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameNotEqualTo(String value) {
            addCriterion("default_view_classname <>", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameGreaterThan(String value) {
            addCriterion("default_view_classname >", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameGreaterThanOrEqualTo(String value) {
            addCriterion("default_view_classname >=", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameLessThan(String value) {
            addCriterion("default_view_classname <", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameLessThanOrEqualTo(String value) {
            addCriterion("default_view_classname <=", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameLike(String value) {
            addCriterion("default_view_classname like", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameNotLike(String value) {
            addCriterion("default_view_classname not like", value, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameIn(List<String> values) {
            addCriterion("default_view_classname in", values, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameNotIn(List<String> values) {
            addCriterion("default_view_classname not in", values, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameBetween(String value1, String value2) {
            addCriterion("default_view_classname between", value1, value2, "defaultViewClassname");
            return (Criteria) this;
        }

        public Criteria andDefaultViewClassnameNotBetween(String value1, String value2) {
            addCriterion("default_view_classname not between", value1, value2, "defaultViewClassname");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}