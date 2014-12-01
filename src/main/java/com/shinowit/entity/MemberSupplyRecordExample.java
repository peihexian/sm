package com.shinowit.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MemberSupplyRecordExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    private int pageIndex;

    private int pageSize;

    private String customCriteria;

    public MemberSupplyRecordExample() {
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

    public MemberSupplyRecordExample(int pageSize, int pageIndex) {
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

        public Criteria andPayAccountIdIsNull() {
            addCriterion("pay_account_id is null");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdIsNotNull() {
            addCriterion("pay_account_id is not null");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdEqualTo(String value) {
            addCriterion("pay_account_id =", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdNotEqualTo(String value) {
            addCriterion("pay_account_id <>", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdGreaterThan(String value) {
            addCriterion("pay_account_id >", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdGreaterThanOrEqualTo(String value) {
            addCriterion("pay_account_id >=", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdLessThan(String value) {
            addCriterion("pay_account_id <", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdLessThanOrEqualTo(String value) {
            addCriterion("pay_account_id <=", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdLike(String value) {
            addCriterion("pay_account_id like", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdNotLike(String value) {
            addCriterion("pay_account_id not like", value, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdIn(List<String> values) {
            addCriterion("pay_account_id in", values, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdNotIn(List<String> values) {
            addCriterion("pay_account_id not in", values, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdBetween(String value1, String value2) {
            addCriterion("pay_account_id between", value1, value2, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayAccountIdNotBetween(String value1, String value2) {
            addCriterion("pay_account_id not between", value1, value2, "payAccountId");
            return (Criteria) this;
        }

        public Criteria andPayBankIsNull() {
            addCriterion("pay_bank is null");
            return (Criteria) this;
        }

        public Criteria andPayBankIsNotNull() {
            addCriterion("pay_bank is not null");
            return (Criteria) this;
        }

        public Criteria andPayBankEqualTo(String value) {
            addCriterion("pay_bank =", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankNotEqualTo(String value) {
            addCriterion("pay_bank <>", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankGreaterThan(String value) {
            addCriterion("pay_bank >", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankGreaterThanOrEqualTo(String value) {
            addCriterion("pay_bank >=", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankLessThan(String value) {
            addCriterion("pay_bank <", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankLessThanOrEqualTo(String value) {
            addCriterion("pay_bank <=", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankLike(String value) {
            addCriterion("pay_bank like", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankNotLike(String value) {
            addCriterion("pay_bank not like", value, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankIn(List<String> values) {
            addCriterion("pay_bank in", values, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankNotIn(List<String> values) {
            addCriterion("pay_bank not in", values, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankBetween(String value1, String value2) {
            addCriterion("pay_bank between", value1, value2, "payBank");
            return (Criteria) this;
        }

        public Criteria andPayBankNotBetween(String value1, String value2) {
            addCriterion("pay_bank not between", value1, value2, "payBank");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdIsNull() {
            addCriterion("recv_account_id is null");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdIsNotNull() {
            addCriterion("recv_account_id is not null");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdEqualTo(String value) {
            addCriterion("recv_account_id =", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdNotEqualTo(String value) {
            addCriterion("recv_account_id <>", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdGreaterThan(String value) {
            addCriterion("recv_account_id >", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdGreaterThanOrEqualTo(String value) {
            addCriterion("recv_account_id >=", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdLessThan(String value) {
            addCriterion("recv_account_id <", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdLessThanOrEqualTo(String value) {
            addCriterion("recv_account_id <=", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdLike(String value) {
            addCriterion("recv_account_id like", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdNotLike(String value) {
            addCriterion("recv_account_id not like", value, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdIn(List<String> values) {
            addCriterion("recv_account_id in", values, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdNotIn(List<String> values) {
            addCriterion("recv_account_id not in", values, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdBetween(String value1, String value2) {
            addCriterion("recv_account_id between", value1, value2, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvAccountIdNotBetween(String value1, String value2) {
            addCriterion("recv_account_id not between", value1, value2, "recvAccountId");
            return (Criteria) this;
        }

        public Criteria andRecvBankIsNull() {
            addCriterion("recv_bank is null");
            return (Criteria) this;
        }

        public Criteria andRecvBankIsNotNull() {
            addCriterion("recv_bank is not null");
            return (Criteria) this;
        }

        public Criteria andRecvBankEqualTo(String value) {
            addCriterion("recv_bank =", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankNotEqualTo(String value) {
            addCriterion("recv_bank <>", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankGreaterThan(String value) {
            addCriterion("recv_bank >", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankGreaterThanOrEqualTo(String value) {
            addCriterion("recv_bank >=", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankLessThan(String value) {
            addCriterion("recv_bank <", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankLessThanOrEqualTo(String value) {
            addCriterion("recv_bank <=", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankLike(String value) {
            addCriterion("recv_bank like", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankNotLike(String value) {
            addCriterion("recv_bank not like", value, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankIn(List<String> values) {
            addCriterion("recv_bank in", values, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankNotIn(List<String> values) {
            addCriterion("recv_bank not in", values, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankBetween(String value1, String value2) {
            addCriterion("recv_bank between", value1, value2, "recvBank");
            return (Criteria) this;
        }

        public Criteria andRecvBankNotBetween(String value1, String value2) {
            addCriterion("recv_bank not between", value1, value2, "recvBank");
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

        public Criteria andSupplyTimeIsNull() {
            addCriterion("supply_time is null");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeIsNotNull() {
            addCriterion("supply_time is not null");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeEqualTo(Date value) {
            addCriterion("supply_time =", value, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeNotEqualTo(Date value) {
            addCriterion("supply_time <>", value, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeGreaterThan(Date value) {
            addCriterion("supply_time >", value, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("supply_time >=", value, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeLessThan(Date value) {
            addCriterion("supply_time <", value, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeLessThanOrEqualTo(Date value) {
            addCriterion("supply_time <=", value, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeIn(List<Date> values) {
            addCriterion("supply_time in", values, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeNotIn(List<Date> values) {
            addCriterion("supply_time not in", values, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeBetween(Date value1, Date value2) {
            addCriterion("supply_time between", value1, value2, "supplyTime");
            return (Criteria) this;
        }

        public Criteria andSupplyTimeNotBetween(Date value1, Date value2) {
            addCriterion("supply_time not between", value1, value2, "supplyTime");
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