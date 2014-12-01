package com.shinowit.framework.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ValidationMessages {
	 
    private List<CustFieldError> fieldErrors = new ArrayList<CustFieldError>();

    //用于防止错误提示消息重复的map,Hibernate Valid有可能造成错误提示消息重复
    private Map<String,String> fieldErrorMap=new HashMap<String,String>();
    
    private List<String> globalErrors = new ArrayList<String>();
    
    public List<CustFieldError> getFieldErrors() {
        return fieldErrors;
    }
    
    public List<String> getGlobalErrors(){
    	return globalErrors;
    }
 
    public void addFieldError(String fieldName,String message) {
    	//要防止JSR 303验证消息重复,所以验证失败消息除了加入list以外还会加入map，后续要增加验证失败消息时从map检索一下防止重复
    	if (fieldErrorMap.get(fieldName+message)==null){
    		fieldErrorMap.put(fieldName+message, fieldName+message);
            CustFieldError fieldError = new CustFieldError();
            fieldError.setId(fieldName);
            fieldError.setMsg(message);
            fieldErrors.add(fieldError);
    	}
    }
    
    public void addGlobalError(String message) {
    	globalErrors.add(message);
    }
    
}