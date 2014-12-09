package com.shinowit.web;

import com.shinowit.dao.mapper.ProductStockMapper;
import com.shinowit.entity.ProductStock;
import com.shinowit.entity.ProductStockExample;
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
@RequestMapping(value = "/productstock")
public class ProductStockController extends BaseController {

    @Resource
    private ProductStockMapper productstock_dao;

    @RequestMapping(value = "/listbypage")
    @ResponseBody
    public Map<String, Object> listByPage(@RequestParam("start") int start, @RequestParam("limit") int pageSize, @RequestParam("page") int pageIndex,@RequestParam("productCode") String productCode) {
        Map<String, Object> result = new HashMap<String, Object>();

        ProductStockExample ex = new ProductStockExample(); //创建缺省查询条件对象
        ex.setPageSize(pageSize);
        ex.setPageIndex(pageIndex);

        if ((null!=productCode) && (productCode.trim().length()>0)){
            ex.createCriteria().andProductCodeEqualTo(productCode);
        }
        //ex.setOrderByClause("product_code");

        List<ProductStock> list_data = null;
        int record_count = 0;
        try {
            list_data = productstock_dao.selectPage(ex);
            result.put("listData", list_data);

            //取得满足查询条件的记录总数
            record_count = productstock_dao.countByExample(ex);

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