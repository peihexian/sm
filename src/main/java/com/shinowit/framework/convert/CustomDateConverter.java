package com.shinowit.framework.convert;

import org.apache.log4j.Logger;
import org.springframework.core.convert.converter.Converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CustomDateConverter implements Converter<String, Date> {
    private static final Logger logger = Logger.getLogger(CustomDateConverter.class);

    @Override
    public Date convert(String source) {
        if ((null == source) || (source.trim().length() == 0)) {
            return null;
        }
        SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat dateFormat2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        dateFormat1.setLenient(false);
        try {
            if (source.trim().length()>10) {
                return dateFormat2.parse(source);
            }else{
                return dateFormat1.parse(source);
            }
        } catch (ParseException e) {
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            throw new IllegalArgumentException(source + "不是一个有效的日期");
        }
    }
}