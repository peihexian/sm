package com.shinowit.web.main;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * Created on 2014/11/7.
 */
@Controller
public class MainController {

    @RequestMapping(value="/main",method = RequestMethod.GET)
    public String index(Model model,HttpSession session){
        return "/main";
    }
}
