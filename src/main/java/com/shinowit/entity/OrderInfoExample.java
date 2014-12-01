package com.shinowit.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    private int pageIndex;

    private int pageSize;

    private String customCriteria;

    public OrderInfoExample() {
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

    public OrderInfoExample(int pageSize, int pageIndex) {
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

        public Criteria andBillCodeIsNull() {
            addCriterion("bill_code is null");
            return (Criteria) this;
        }

        public Criteria andBillCodeIsNotNull() {
            addCriterion("bill_code is not null");
            return (Criteria) this;
        }

        public Criteria andBillCodeEqualTo(Integer value) {
            addCriterion("bill_code =", value, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeNotEqualTo(Integer value) {
            addCriterion("bill_code <>", value, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeGreaterThan(Integer value) {
            addCriterion("bill_code >", value, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeGreaterThanOrEqualTo(Integer value) {
            addCriterion("bill_code >=", value, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeLessThan(Integer value) {
            addCriterion("bill_code <", value, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeLessThanOrEqualTo(Integer value) {
            addCriterion("bill_code <=", value, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeIn(List<Integer> values) {
            addCriterion("bill_code in", values, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeNotIn(List<Integer> values) {
            addCriterion("bill_code not in", values, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeBetween(Integer value1, Integer value2) {
            addCriterion("bill_code between", value1, value2, "billCode");
            return (Criteria) this;
        }

        public Criteria andBillCodeNotBetween(Integer value1, Integer value2) {
            addCriterion("bill_code not between", value1, value2, "billCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeIsNull() {
            addCriterion("delivery_code is null");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeIsNotNull() {
            addCriterion("delivery_code is not null");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeEqualTo(String value) {
            addCriterion("delivery_code =", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeNotEqualTo(String value) {
            addCriterion("delivery_code <>", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeGreaterThan(String value) {
            addCriterion("delivery_code >", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeGreaterThanOrEqualTo(String value) {
            addCriterion("delivery_code >=", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeLessThan(String value) {
            addCriterion("delivery_code <", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeLessThanOrEqualTo(String value) {
            addCriterion("delivery_code <=", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeLike(String value) {
            addCriterion("delivery_code like", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeNotLike(String value) {
            addCriterion("delivery_code not like", value, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeIn(List<String> values) {
            addCriterion("delivery_code in", values, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeNotIn(List<String> values) {
            addCriterion("delivery_code not in", values, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeBetween(String value1, String value2) {
            addCriterion("delivery_code between", value1, value2, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andDeliveryCodeNotBetween(String value1, String value2) {
            addCriterion("delivery_code not between", value1, value2, "deliveryCode");
            return (Criteria) this;
        }

        public Criteria andOutStockIdIsNull() {
            addCriterion("out_stock_id is null");
            return (Criteria) this;
        }

        public Criteria andOutStockIdIsNotNull() {
            addCriterion("out_stock_id is not null");
            return (Criteria) this;
        }

        public Criteria andOutStockIdEqualTo(Integer value) {
            addCriterion("out_stock_id =", value, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdNotEqualTo(Integer value) {
            addCriterion("out_stock_id <>", value, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdGreaterThan(Integer value) {
            addCriterion("out_stock_id >", value, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("out_stock_id >=", value, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdLessThan(Integer value) {
            addCriterion("out_stock_id <", value, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdLessThanOrEqualTo(Integer value) {
            addCriterion("out_stock_id <=", value, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdIn(List<Integer> values) {
            addCriterion("out_stock_id in", values, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdNotIn(List<Integer> values) {
            addCriterion("out_stock_id not in", values, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdBetween(Integer value1, Integer value2) {
            addCriterion("out_stock_id between", value1, value2, "outStockId");
            return (Criteria) this;
        }

        public Criteria andOutStockIdNotBetween(Integer value1, Integer value2) {
            addCriterion("out_stock_id not between", value1, value2, "outStockId");
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

        public Criteria andUserIdIsNull() {
            addCriterion("user_id is null");
            return (Criteria) this;
        }

        public Criteria andUserIdIsNotNull() {
            addCriterion("user_id is not null");
            return (Criteria) this;
        }

        public Criteria andUserIdEqualTo(Integer value) {
            addCriterion("user_id =", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotEqualTo(Integer value) {
            addCriterion("user_id <>", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThan(Integer value) {
            addCriterion("user_id >", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("user_id >=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThan(Integer value) {
            addCriterion("user_id <", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdLessThanOrEqualTo(Integer value) {
            addCriterion("user_id <=", value, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdIn(List<Integer> values) {
            addCriterion("user_id in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotIn(List<Integer> values) {
            addCriterion("user_id not in", values, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdBetween(Integer value1, Integer value2) {
            addCriterion("user_id between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andUserIdNotBetween(Integer value1, Integer value2) {
            addCriterion("user_id not between", value1, value2, "userId");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeIsNull() {
            addCriterion("post_bill_code is null");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeIsNotNull() {
            addCriterion("post_bill_code is not null");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeEqualTo(String value) {
            addCriterion("post_bill_code =", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeNotEqualTo(String value) {
            addCriterion("post_bill_code <>", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeGreaterThan(String value) {
            addCriterion("post_bill_code >", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeGreaterThanOrEqualTo(String value) {
            addCriterion("post_bill_code >=", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeLessThan(String value) {
            addCriterion("post_bill_code <", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeLessThanOrEqualTo(String value) {
            addCriterion("post_bill_code <=", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeLike(String value) {
            addCriterion("post_bill_code like", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeNotLike(String value) {
            addCriterion("post_bill_code not like", value, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeIn(List<String> values) {
            addCriterion("post_bill_code in", values, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeNotIn(List<String> values) {
            addCriterion("post_bill_code not in", values, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeBetween(String value1, String value2) {
            addCriterion("post_bill_code between", value1, value2, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andPostBillCodeNotBetween(String value1, String value2) {
            addCriterion("post_bill_code not between", value1, value2, "postBillCode");
            return (Criteria) this;
        }

        public Criteria andBillStatusIsNull() {
            addCriterion("bill_status is null");
            return (Criteria) this;
        }

        public Criteria andBillStatusIsNotNull() {
            addCriterion("bill_status is not null");
            return (Criteria) this;
        }

        public Criteria andBillStatusEqualTo(Byte value) {
            addCriterion("bill_status =", value, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusNotEqualTo(Byte value) {
            addCriterion("bill_status <>", value, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusGreaterThan(Byte value) {
            addCriterion("bill_status >", value, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusGreaterThanOrEqualTo(Byte value) {
            addCriterion("bill_status >=", value, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusLessThan(Byte value) {
            addCriterion("bill_status <", value, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusLessThanOrEqualTo(Byte value) {
            addCriterion("bill_status <=", value, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusIn(List<Byte> values) {
            addCriterion("bill_status in", values, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusNotIn(List<Byte> values) {
            addCriterion("bill_status not in", values, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusBetween(Byte value1, Byte value2) {
            addCriterion("bill_status between", value1, value2, "billStatus");
            return (Criteria) this;
        }

        public Criteria andBillStatusNotBetween(Byte value1, Byte value2) {
            addCriterion("bill_status not between", value1, value2, "billStatus");
            return (Criteria) this;
        }

        public Criteria andOrderTimeIsNull() {
            addCriterion("order_time is null");
            return (Criteria) this;
        }

        public Criteria andOrderTimeIsNotNull() {
            addCriterion("order_time is not null");
            return (Criteria) this;
        }

        public Criteria andOrderTimeEqualTo(Date value) {
            addCriterion("order_time =", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeNotEqualTo(Date value) {
            addCriterion("order_time <>", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeGreaterThan(Date value) {
            addCriterion("order_time >", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("order_time >=", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeLessThan(Date value) {
            addCriterion("order_time <", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeLessThanOrEqualTo(Date value) {
            addCriterion("order_time <=", value, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeIn(List<Date> values) {
            addCriterion("order_time in", values, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeNotIn(List<Date> values) {
            addCriterion("order_time not in", values, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeBetween(Date value1, Date value2) {
            addCriterion("order_time between", value1, value2, "orderTime");
            return (Criteria) this;
        }

        public Criteria andOrderTimeNotBetween(Date value1, Date value2) {
            addCriterion("order_time not between", value1, value2, "orderTime");
            return (Criteria) this;
        }

        public Criteria andRecvNameIsNull() {
            addCriterion("recv_name is null");
            return (Criteria) this;
        }

        public Criteria andRecvNameIsNotNull() {
            addCriterion("recv_name is not null");
            return (Criteria) this;
        }

        public Criteria andRecvNameEqualTo(String value) {
            addCriterion("recv_name =", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameNotEqualTo(String value) {
            addCriterion("recv_name <>", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameGreaterThan(String value) {
            addCriterion("recv_name >", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameGreaterThanOrEqualTo(String value) {
            addCriterion("recv_name >=", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameLessThan(String value) {
            addCriterion("recv_name <", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameLessThanOrEqualTo(String value) {
            addCriterion("recv_name <=", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameLike(String value) {
            addCriterion("recv_name like", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameNotLike(String value) {
            addCriterion("recv_name not like", value, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameIn(List<String> values) {
            addCriterion("recv_name in", values, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameNotIn(List<String> values) {
            addCriterion("recv_name not in", values, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameBetween(String value1, String value2) {
            addCriterion("recv_name between", value1, value2, "recvName");
            return (Criteria) this;
        }

        public Criteria andRecvNameNotBetween(String value1, String value2) {
            addCriterion("recv_name not between", value1, value2, "recvName");
            return (Criteria) this;
        }

        public Criteria andLinkTelIsNull() {
            addCriterion("link_tel is null");
            return (Criteria) this;
        }

        public Criteria andLinkTelIsNotNull() {
            addCriterion("link_tel is not null");
            return (Criteria) this;
        }

        public Criteria andLinkTelEqualTo(String value) {
            addCriterion("link_tel =", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelNotEqualTo(String value) {
            addCriterion("link_tel <>", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelGreaterThan(String value) {
            addCriterion("link_tel >", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelGreaterThanOrEqualTo(String value) {
            addCriterion("link_tel >=", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelLessThan(String value) {
            addCriterion("link_tel <", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelLessThanOrEqualTo(String value) {
            addCriterion("link_tel <=", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelLike(String value) {
            addCriterion("link_tel like", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelNotLike(String value) {
            addCriterion("link_tel not like", value, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelIn(List<String> values) {
            addCriterion("link_tel in", values, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelNotIn(List<String> values) {
            addCriterion("link_tel not in", values, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelBetween(String value1, String value2) {
            addCriterion("link_tel between", value1, value2, "linkTel");
            return (Criteria) this;
        }

        public Criteria andLinkTelNotBetween(String value1, String value2) {
            addCriterion("link_tel not between", value1, value2, "linkTel");
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

        public Criteria andTotalMoneyIsNull() {
            addCriterion("total_money is null");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyIsNotNull() {
            addCriterion("total_money is not null");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyEqualTo(Float value) {
            addCriterion("total_money =", value, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyNotEqualTo(Float value) {
            addCriterion("total_money <>", value, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyGreaterThan(Float value) {
            addCriterion("total_money >", value, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyGreaterThanOrEqualTo(Float value) {
            addCriterion("total_money >=", value, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyLessThan(Float value) {
            addCriterion("total_money <", value, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyLessThanOrEqualTo(Float value) {
            addCriterion("total_money <=", value, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyIn(List<Float> values) {
            addCriterion("total_money in", values, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyNotIn(List<Float> values) {
            addCriterion("total_money not in", values, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyBetween(Float value1, Float value2) {
            addCriterion("total_money between", value1, value2, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andTotalMoneyNotBetween(Float value1, Float value2) {
            addCriterion("total_money not between", value1, value2, "totalMoney");
            return (Criteria) this;
        }

        public Criteria andRemarkIsNull() {
            addCriterion("remark is null");
            return (Criteria) this;
        }

        public Criteria andRemarkIsNotNull() {
            addCriterion("remark is not null");
            return (Criteria) this;
        }

        public Criteria andRemarkEqualTo(String value) {
            addCriterion("remark =", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotEqualTo(String value) {
            addCriterion("remark <>", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkGreaterThan(String value) {
            addCriterion("remark >", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkGreaterThanOrEqualTo(String value) {
            addCriterion("remark >=", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkLessThan(String value) {
            addCriterion("remark <", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkLessThanOrEqualTo(String value) {
            addCriterion("remark <=", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkLike(String value) {
            addCriterion("remark like", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotLike(String value) {
            addCriterion("remark not like", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkIn(List<String> values) {
            addCriterion("remark in", values, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotIn(List<String> values) {
            addCriterion("remark not in", values, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkBetween(String value1, String value2) {
            addCriterion("remark between", value1, value2, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotBetween(String value1, String value2) {
            addCriterion("remark not between", value1, value2, "remark");
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