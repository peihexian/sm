package com.shinowit.framework.controller;

import com.shinowit.framework.model.ValidationMessages;
import org.apache.log4j.Logger;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import javax.annotation.Resource;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class BaseController {
    protected Logger logger = Logger.getLogger(getClass());

    @Resource
    protected MessageSource messageSource; //用于处理国际化资源

    /**
     * 填充字段转换或者绑定错误到结果map中,主要解决错误提示消息i18n问题
     *
     * @param bindResult
     * @param result
     */
    protected void fillBindingErrorToResult(BindingResult bindResult, Map<String, Object> result) {
        if (bindResult.hasFieldErrors()) {
            Locale locale = LocaleContextHolder.getLocale();
            //Locale locale =RequestContextUtils.getLocale(getRequest());
            List<FieldError> fieldErrorList = bindResult.getFieldErrors();
            ValidationMessages messages = new ValidationMessages();
            for (FieldError fieldError : fieldErrorList) {
                String errorCodes[] = fieldError.getCodes();
                boolean found_i18n_msg = false;
                for (String code : errorCodes) {
                    String error_msg = messageSource.getMessage(code, null, fieldError.getDefaultMessage(), locale);
                    if ((error_msg != null) && (!error_msg.equals(fieldError.getDefaultMessage()))) {
                        //找到了i18n错误提示信息
                        found_i18n_msg = true;
                        messages.addFieldError(fieldError.getField(), error_msg);
                        break;
                    }
                }
                if (false == found_i18n_msg) {
                    messages.addFieldError(fieldError.getField(), fieldError.getDefaultMessage());
                }
            }
            //转换为extjs能够识别的错误消息格式
            result.put("errors", messages.getFieldErrors());
        }
    }

}
