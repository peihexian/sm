package com.shinowit.entity;

import java.util.ArrayList;
import java.util.List;

public class MemberAddressExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    private int pageIndex;

    private int pageSize;

    private String customCriteria;

    public MemberAddressExample() {
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

    public MemberAddressExample(int pageSize, int pageIndex) {
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

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andUserNameIsNull() {
            addCriterion("user_name is null");
            return (Criteria) this;
        }

        public Criteria andUserNameIsNotNull() {
            addCriterion("user_name is not null");
            return (Criteria) this;
        }

        public Criteria andUserNameEqualTo(String value) {
            addCriterion("user_name =", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotEqualTo(String value) {
            addCriterion("user_name <>", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameGreaterThan(String value) {
            addCriterion("user_name >", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameGreaterThanOrEqualTo(String value) {
            addCriterion("user_name >=", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLessThan(String value) {
            addCriterion("user_name <", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLessThanOrEqualTo(String value) {
            addCriterion("user_name <=", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameLike(String value) {
            addCriterion("user_name like", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotLike(String value) {
            addCriterion("user_name not like", value, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameIn(List<String> values) {
            addCriterion("user_name in", values, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotIn(List<String> values) {
            addCriterion("user_name not in", values, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameBetween(String value1, String value2) {
            addCriterion("user_name between", value1, value2, "userName");
            return (Criteria) this;
        }

        public Criteria andUserNameNotBetween(String value1, String value2) {
            addCriterion("user_name not between", value1, value2, "userName");
            return (Criteria) this;
        }

        public Criteria andRecvManIsNull() {
            addCriterion("recv_man is null");
            return (Criteria) this;
        }

        public Criteria andRecvManIsNotNull() {
            addCriterion("recv_man is not null");
            return (Criteria) this;
        }

        public Criteria andRecvManEqualTo(String value) {
            addCriterion("recv_man =", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManNotEqualTo(String value) {
            addCriterion("recv_man <>", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManGreaterThan(String value) {
            addCriterion("recv_man >", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManGreaterThanOrEqualTo(String value) {
            addCriterion("recv_man >=", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManLessThan(String value) {
            addCriterion("recv_man <", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManLessThanOrEqualTo(String value) {
            addCriterion("recv_man <=", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManLike(String value) {
            addCriterion("recv_man like", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManNotLike(String value) {
            addCriterion("recv_man not like", value, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManIn(List<String> values) {
            addCriterion("recv_man in", values, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManNotIn(List<String> values) {
            addCriterion("recv_man not in", values, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManBetween(String value1, String value2) {
            addCriterion("recv_man between", value1, value2, "recvMan");
            return (Criteria) this;
        }

        public Criteria andRecvManNotBetween(String value1, String value2) {
            addCriterion("recv_man not between", value1, value2, "recvMan");
            return (Criteria) this;
        }

        public Criteria andTelIsNull() {
            addCriterion("tel is null");
            return (Criteria) this;
        }

        public Criteria andTelIsNotNull() {
            addCriterion("tel is not null");
            return (Criteria) this;
        }

        public Criteria andTelEqualTo(String value) {
            addCriterion("tel =", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelNotEqualTo(String value) {
            addCriterion("tel <>", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelGreaterThan(String value) {
            addCriterion("tel >", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelGreaterThanOrEqualTo(String value) {
            addCriterion("tel >=", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelLessThan(String value) {
            addCriterion("tel <", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelLessThanOrEqualTo(String value) {
            addCriterion("tel <=", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelLike(String value) {
            addCriterion("tel like", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelNotLike(String value) {
            addCriterion("tel not like", value, "tel");
            return (Criteria) this;
        }

        public Criteria andTelIn(List<String> values) {
            addCriterion("tel in", values, "tel");
            return (Criteria) this;
        }

        public Criteria andTelNotIn(List<String> values) {
            addCriterion("tel not in", values, "tel");
            return (Criteria) this;
        }

        public Criteria andTelBetween(String value1, String value2) {
            addCriterion("tel between", value1, value2, "tel");
            return (Criteria) this;
        }

        public Criteria andTelNotBetween(String value1, String value2) {
            addCriterion("tel not between", value1, value2, "tel");
            return (Criteria) this;
        }

        public Criteria andRecvAddressIsNull() {
            addCriterion("recv_address is null");
            return (Criteria) this;
        }

        public Criteria andRecvAddressIsNotNull() {
            addCriterion("recv_address is not null");
            return (Criteria) this;
        }

        public Criteria andRecvAddressEqualTo(String value) {
            addCriterion("recv_address =", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressNotEqualTo(String value) {
            addCriterion("recv_address <>", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressGreaterThan(String value) {
            addCriterion("recv_address >", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressGreaterThanOrEqualTo(String value) {
            addCriterion("recv_address >=", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressLessThan(String value) {
            addCriterion("recv_address <", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressLessThanOrEqualTo(String value) {
            addCriterion("recv_address <=", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressLike(String value) {
            addCriterion("recv_address like", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressNotLike(String value) {
            addCriterion("recv_address not like", value, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressIn(List<String> values) {
            addCriterion("recv_address in", values, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressNotIn(List<String> values) {
            addCriterion("recv_address not in", values, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressBetween(String value1, String value2) {
            addCriterion("recv_address between", value1, value2, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andRecvAddressNotBetween(String value1, String value2) {
            addCriterion("recv_address not between", value1, value2, "recvAddress");
            return (Criteria) this;
        }

        public Criteria andPostCodeIsNull() {
            addCriterion("post_code is null");
            return (Criteria) this;
        }

        public Criteria andPostCodeIsNotNull() {
            addCriterion("post_code is not null");
            return (Criteria) this;
        }

        public Criteria andPostCodeEqualTo(String value) {
            addCriterion("post_code =", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeNotEqualTo(String value) {
            addCriterion("post_code <>", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeGreaterThan(String value) {
            addCriterion("post_code >", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeGreaterThanOrEqualTo(String value) {
            addCriterion("post_code >=", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeLessThan(String value) {
            addCriterion("post_code <", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeLessThanOrEqualTo(String value) {
            addCriterion("post_code <=", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeLike(String value) {
            addCriterion("post_code like", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeNotLike(String value) {
            addCriterion("post_code not like", value, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeIn(List<String> values) {
            addCriterion("post_code in", values, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeNotIn(List<String> values) {
            addCriterion("post_code not in", values, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeBetween(String value1, String value2) {
            addCriterion("post_code between", value1, value2, "postCode");
            return (Criteria) this;
        }

        public Criteria andPostCodeNotBetween(String value1, String value2) {
            addCriterion("post_code not between", value1, value2, "postCode");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrIsNull() {
            addCriterion("default_addr is null");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrIsNotNull() {
            addCriterion("default_addr is not null");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrEqualTo(Boolean value) {
            addCriterion("default_addr =", value, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrNotEqualTo(Boolean value) {
            addCriterion("default_addr <>", value, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrGreaterThan(Boolean value) {
            addCriterion("default_addr >", value, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrGreaterThanOrEqualTo(Boolean value) {
            addCriterion("default_addr >=", value, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrLessThan(Boolean value) {
            addCriterion("default_addr <", value, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrLessThanOrEqualTo(Boolean value) {
            addCriterion("default_addr <=", value, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrIn(List<Boolean> values) {
            addCriterion("default_addr in", values, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrNotIn(List<Boolean> values) {
            addCriterion("default_addr not in", values, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrBetween(Boolean value1, Boolean value2) {
            addCriterion("default_addr between", value1, value2, "defaultAddr");
            return (Criteria) this;
        }

        public Criteria andDefaultAddrNotBetween(Boolean value1, Boolean value2) {
            addCriterion("default_addr not between", value1, value2, "defaultAddr");
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