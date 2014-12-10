package com.shinowit.web.main;

import org.apache.shiro.authz.annotation.RequiresUser;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created on 2014/11/7.
 */
@Controller
public class MainController {

    @Resource
    private JdbcTemplate jt;

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    @RequiresUser
    public String index(Model model, HttpSession session) {
        return "/main";
    }


    @RequestMapping(value = "/stock_chart")
    @ResponseBody
    public Map<String, Object> queryStockChartData() {
        String sql = "select b.product_name,(a.avg_price*a.num) as data1  from product_stock a inner join product b on a.product_code=b.product_code";
        Map<String, Object> result = new HashMap<String, Object>();
        List<Map<String, Object>> list1 = jt.queryForList(sql);
        result.put("chart_data", list1);
        return result;
    }
}
