package com.shinowit.web;

import com.shinowit.dao.mapper.InStockDetailMapper;
import com.shinowit.entity.InStockDetail;
import com.shinowit.entity.InStockDetailExample;
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
@RequestMapping(value = "/instockdetail")
public class InStockDetailController extends BaseController {

    @Resource
    private InStockDetailMapper instockdetail_dao;

    @RequestMapping(value = "/listbypage")
    @ResponseBody
    public Map<String, Object> listByPage(@RequestParam("start") int start, @RequestParam("limit") int pageSize, @RequestParam("page") int pageIndex) {
        Map<String, Object> result = new HashMap<String, Object>();

        InStockDetailExample ex = new InStockDetailExample(); //创建缺省查询条件对象
        ex.setPageSize(pageSize);
        ex.setPageIndex(pageIndex);
        //ex.setOrderByClause("in_stock_detail_id");

        List<InStockDetail> list_data = null;
        int record_count = 0;
        try {
            list_data = instockdetail_dao.selectPage(ex);
            result.put("listData", list_data);

            //取得满足查询条件的记录总数
            record_count = instockdetail_dao.countByExample(ex);

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


    @RequestMapping(value = "/add")
    @ResponseBody
    public Map<String, Object> add(@Valid InStockDetail pojo, BindingResult bindResult) {
        Map<String, Object> result = new HashMap<String, Object>();

        if (bindResult.hasErrors()) {

            if (logger.isDebugEnabled()) {
                logger.debug("发生了绑定错误");
            }

            result.put("success", false);
            result.put("msg", "保存失败!输入数据非法!");

            fillBindingErrorToResult(bindResult, result);
            return result;
        }


        int rec_changed = 0;
        try {
            rec_changed = instockdetail_dao.insert(pojo);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "保存失败!数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        if (rec_changed > 0) {
            result.put("success", true);
            result.put("msg", "保存成功!");
        } else {
            result.put("success", false);
            result.put("msg", "保存失败!");
        }
        return result;
    }


    @RequestMapping(value = "/edit")
    @ResponseBody
    public Map<String, Object> edit(@Valid InStockDetail pojo, BindingResult bindResult) {
        Map<String, Object> result = new HashMap<String, Object>();

        if (bindResult.hasErrors()) {

            if (logger.isDebugEnabled()) {
                logger.debug("发生了绑定错误");
            }

            result.put("success", false);
            result.put("msg", "数据修改失败!输入数据非法!");

            fillBindingErrorToResult(bindResult, result);
            return result;
        }

        int rec_changed = 0;
        try {
            rec_changed = instockdetail_dao.updateByPrimaryKey(pojo);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "修改失败!数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        if (rec_changed > 0) {
            result.put("success", true);
            result.put("msg", "修改成功!");
        } else {
            result.put("success", false);
            result.put("msg", "修改失败!");
        }
        return result;
    }


    @RequestMapping(value = "/del")
    @ResponseBody
    public Map<String, Object> del(@RequestParam("id") Integer inStockDetailId) {
        Map<String, Object> result = new HashMap<String, Object>();

        int rec_changed = 0;
        try {
            rec_changed = instockdetail_dao.deleteByPrimaryKey(inStockDetailId);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "删除失败!数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        if (rec_changed > 0) {
            result.put("success", true);
            result.put("msg", "删除成功!");
        } else {
            result.put("success", false);
            result.put("msg", "删除失败!");
        }
        return result;
    }


}