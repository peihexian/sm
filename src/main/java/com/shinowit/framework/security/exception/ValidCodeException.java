package com.shinowit.framework.security.exception;

import org.apache.shiro.authc.AuthenticationException;

/**
 * Created on 2014/11/11.
 */
public class ValidCodeException extends AuthenticationException {

    public ValidCodeException(String msg){
        super(msg);
    }
}
