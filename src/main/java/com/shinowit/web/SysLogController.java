package com.shinowit.web;

import com.shinowit.dao.mapper.SysLogMapper;
import com.shinowit.entity.SysLog;
import com.shinowit.entity.SysLogExample;
import com.shinowit.framework.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/syslog")
public class SysLogController extends BaseController {

    @Resource
    private SysLogMapper syslog_dao;

    @RequestMapping(value = "/listbypage")
    @ResponseBody
    public Map<String, Object> listByPage(@RequestParam("start") int start, @RequestParam("limit") int pageSize, @RequestParam("page") int pageIndex) {
        Map<String, Object> result = new HashMap<String, Object>();

        SysLogExample ex = new SysLogExample(); //创建缺省查询条件对象
        ex.setPageSize(pageSize);
        ex.setPageIndex(pageIndex);
        //ex.setOrderByClause("log_id");

        List<SysLog> list_data = null;
        int record_count = 0;
        try {
            list_data = syslog_dao.selectPage(ex);
            result.put("listData", list_data);

            //取得满足查询条件的记录总数
            record_count = syslog_dao.countByExample(ex);

            //设置查询成功标志
            result.put("success", true);

            if (logger.isDebugEnabled()) {
                logger.debug("取得分页结果记录行数:" + list_data.size() + ",总记录数:" + record_count);
            }

        } catch (Exception e) {
            result.put("success", false); //设置查询成功标志为false
            result.put("msg", "查询失败!数据库操作异常!");

            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
        }

        result.put("listData", list_data);
        result.put("totalRecordCount", record_count);

        return result;
    }


}