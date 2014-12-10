package com.shinowit.web;

import com.shinowit.framework.controller.BaseController;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.sql.Types;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/syslog")
public class SysLogController extends BaseController {

    @Resource
    private JdbcTemplate jt;

    @RequestMapping(value = "/listbypage")
    @ResponseBody
    public Map<String, Object> listByPage(@RequestParam("start") int start, @RequestParam("limit") int pageSize, @RequestParam("page") int pageIndex, @RequestParam("login_name") String login_name, @RequestParam("menus") String[] menu_codes) {
        Map<String, Object> result = new HashMap<String, Object>();

//        String query_sql="select a.*,b.login_name,c.menu_name from sys_log a left outer join sys_user b on a.user_id=b.user_id left outer join sys_menu c on a.menu_code=c.menu_code order by log_id desc limit ?,?";
        String query_sql = "select a.*,b.login_name,c.menu_name from sys_log a left outer join sys_user b on a.user_id=b.user_id left outer join sys_menu c on a.menu_code=c.menu_code where 1=1 ";

        List<Object> params = new ArrayList<Object>();
        List<Integer> params_type_list = new ArrayList<Integer>();

        //如果有登录用户名称参数就在查询条件中追加
        if (login_name.trim().length() > 0) {
            query_sql = query_sql + " and login_name like ? ";
            params.add("%" + login_name + "%");
            params_type_list.add(Types.VARCHAR);
        }

        //如果有菜单名称参数就在查询条件中追加
        if (menu_codes.length > 0) {
            StringBuilder builder = new StringBuilder();

            for (int i = 0; i < menu_codes.length; i++) {
                builder.append("?,");
                params.add(menu_codes[i]);
                params_type_list.add(Types.VARCHAR);
            }
            query_sql = query_sql + " and a.menu_code in (" + builder.deleteCharAt(builder.length() - 1).toString() + ")";
        }

        //取总记录数查询sql
        String count_all_sql = "select count(0) from (" + query_sql + ") as t";

        //倒排序及分页参数
        query_sql = query_sql + " order by log_id desc limit " + String.valueOf((pageIndex - 1) * pageSize) + "," + String.valueOf(pageSize);


        List<Map<String, Object>> logs = null;


        int record_count = 0;
        try {
            if (params.size() > 0) {
                Object params_values[] = params.toArray();
                int params_types[] = new int[params_values.length];

                for (int i = 0; i < params_type_list.size(); i++) {
                    params_types[i] = params_type_list.get(i);
                }

                logs = jt.queryForList(query_sql, params_values, params_types);
                //取得满足查询条件的记录总数
                record_count = jt.queryForObject(count_all_sql, params_values, params_types, Integer.class);

            } else {
                logs = jt.queryForList(query_sql);
                //取得满足查询条件的记录总数
                record_count = jt.queryForObject(count_all_sql, Integer.class);
            }


            //设置查询成功标志
            result.put("success", true);

            if (logger.isDebugEnabled()) {
                logger.debug("取得分页结果记录行数:" + logs.size() + ",总记录数:" + record_count);
            }

        } catch (Exception e) {
            result.put("success", false); //设置查询成功标志为false
            result.put("msg", "查询失败!数据库操作异常!");

            e.printStackTrace();
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
        }

        result.put("listData", logs);
        result.put("totalRecordCount", record_count);

        return result;
    }


}