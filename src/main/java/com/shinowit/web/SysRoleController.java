package com.shinowit.web;

import com.shinowit.dao.mapper.SysRoleMapper;
import com.shinowit.entity.SysRole;
import com.shinowit.entity.SysRoleExample;
import com.shinowit.framework.model.ValidationMessages;
import org.apache.log4j.Logger;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Controller
@RequestMapping(value = "/sysrole")
public class SysRoleController {
    private static Logger logger = Logger.getLogger(SysRoleController.class);

    @Resource
    protected MessageSource messageSource; //用于处理国际化资源

    @Resource
    private SysRoleMapper sysrole_dao;

    @RequestMapping(value = "/listbypage")
    @ResponseBody
    public Map<String, Object> listByPage(@RequestParam("start") int start, @RequestParam("limit") int pageSize, @RequestParam("page") int pageIndex) {
        Map<String, Object> result = new HashMap<String, Object>();

        SysRoleExample ex = new SysRoleExample(); //创建缺省查询条件对象
        ex.setPageSize(pageSize);
        ex.setPageIndex(pageIndex);
        //ex.setOrderByClause("role_code");

        List<SysRole> list_data = null;
        int record_count = 0;
        try {
            list_data = sysrole_dao.selectPage(ex);
            result.put("listData", list_data);

            //取得满足查询条件的记录总数
            record_count = sysrole_dao.countByExample(ex);

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
    public Map<String, Object> add(@Valid SysRole pojo, BindingResult bindResult) {
        Map<String, Object> result = new HashMap<String, Object>();

        if (bindResult.hasErrors()) {

            if (logger.isDebugEnabled()) {
                logger.debug("发生了绑定错误");
            }

            result.put("success", false);
            result.put("msg", "保存失败!输入数据非法!");

            return result;
        }


        int rec_changed = 0;
        try {
            rec_changed = sysrole_dao.insert(pojo);
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
    public Map<String, Object> edit(@Valid SysRole pojo, BindingResult bindResult) {
        Map<String, Object> result = new HashMap<String, Object>();

        if (bindResult.hasErrors()) {

            if (logger.isDebugEnabled()) {
                logger.debug("发生了绑定错误");
            }

            result.put("success", false);
            result.put("msg", "数据修改失败!输入数据非法!");

            return result;
        }

        int rec_changed = 0;
        try {
            rec_changed = sysrole_dao.updateByPrimaryKey(pojo);
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
    public Map<String, Object> del(@RequestParam("id") String roleCode) {
        Map<String, Object> result = new HashMap<String, Object>();

        int rec_changed = 0;
        try {
            rec_changed = sysrole_dao.deleteByPrimaryKey(roleCode);
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