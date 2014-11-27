package com.shinowit.web;

import com.shinowit.dao.mapper.SysUserMapper;
import com.shinowit.entity.SysUserExample;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

/**
 * Created by Administrator on 2014/11/27.
 */
@Controller
@RequestMapping(value="/")
public class TestController {

    @Resource
    private SysUserMapper user_dao;

    @RequestMapping(value = "/a")
    public String test(Model model){
        SysUserExample ex=new SysUserExample();
        SysUserExample.Criteria cr=ex.createCriteria().andLoginNameIsNotNull();
        model.addAttribute("user", user_dao.selectByExample(ex));
        return "disp";
    }
}
