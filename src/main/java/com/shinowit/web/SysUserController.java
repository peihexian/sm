package com.shinowit.web;

import com.shinowit.dao.mapper.SysRoleMapper;
import com.shinowit.dao.mapper.SysUserMapper;
import com.shinowit.entity.SysRole;
import com.shinowit.entity.SysRoleExample;
import com.shinowit.entity.SysUser;
import com.shinowit.entity.SysUserExample;
import com.shinowit.framework.controller.BaseController;
import com.shinowit.service.SysUserService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/sysuser")
public class SysUserController extends BaseController {

    @Resource
    private SysUserMapper sysuser_dao;

    @Resource
    private JdbcTemplate jt;

    @Resource
    private SysRoleMapper sys_role_dao;

    @Resource
    private SysUserService sysUserService;

    @RequestMapping(value = "/listbypage")
    @ResponseBody
    public Map<String, Object> listByPage(@RequestParam("start") int start, @RequestParam("limit") int pageSize, @RequestParam("page") int pageIndex) {
        Map<String, Object> result = new HashMap<String, Object>();

        SysUserExample ex = new SysUserExample(); //创建缺省查询条件对象
        ex.setPageSize(pageSize);
        ex.setPageIndex(pageIndex);
        //ex.setOrderByClause("user_id");

        List<SysUser> list_data = null;
        int record_count = 0;
        try {
            list_data = sysuser_dao.selectPage(ex);
            result.put("listData", list_data);

            //取得满足查询条件的记录总数
            record_count = sysuser_dao.countByExample(ex);

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
    public Map<String, Object> add(@Valid SysUser pojo, BindingResult bindResult) {
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


        boolean rec_changed = false;
        try {
            rec_changed = sysUserService.createUser(pojo);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "保存失败!数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        if (true == rec_changed) {
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
    public Map<String, Object> edit(@Valid SysUser pojo, BindingResult bindResult) {
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

        boolean rec_changed = false;
        try {
            rec_changed = sysUserService.editUser(pojo);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "修改失败!数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        if (true == rec_changed) {
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
    public Map<String, Object> del(@RequestParam("id") Integer userId) {
        Map<String, Object> result = new HashMap<String, Object>();

        boolean rec_changed = false;
        try {
            rec_changed = sysUserService.deleteUser(userId);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "删除失败!数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        if (true == rec_changed) {
            result.put("success", true);
            result.put("msg", "删除成功!");
        } else {
            result.put("success", false);
            result.put("msg", "删除失败!");
        }
        return result;
    }

    @RequestMapping(value = "/user_role")
    @ResponseBody
    public Map<String, Object> getUserRoles(@RequestParam("user_id") Integer user_id) {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            List<Map<String, Object>> role_list = jt.queryForList("select a.role_code,a.role_name from sys_role a inner join sys_user_role b on a.role_code=b.role_code where b.user_id=?", new Object[]{user_id}, new int[]{Types.INTEGER});
            result.put("roles", role_list);
            result.put("success", true);

        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return result;
    }

    @RequestMapping(value = "/user_role_all")
    @ResponseBody
    public Map<String, Object> getAllUserRoles() {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            List<SysRole> role_list = sys_role_dao.selectByExample(new SysRoleExample());
            result.put("roles", role_list);
            result.put("success", true);

        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return result;
    }

    @RequestMapping(value = "/edit_user_role_by_user_id")
    @ResponseBody
    public Map<String, Object> getEditUserRoles(@RequestParam("user_id") Integer user_id) {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            List<Map<String, Object>> role_list = jt.queryForList("select a.role_code,a.role_name,case when ((select count(0) from sys_user_role b where b.role_code=a.role_code and b.user_id=?)>0) then true else false end as checked from sys_role a ", new Object[]{user_id}, new int[]{Types.INTEGER});
            result.put("roles", role_list);
            result.put("success", true);

        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage(), e);
        }
        return result;
    }

}