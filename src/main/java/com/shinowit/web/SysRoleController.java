package com.shinowit.web;

import com.shinowit.dao.mapper.SysMenuMapper;
import com.shinowit.dao.mapper.SysRoleMapper;
import com.shinowit.entity.SysMenu;
import com.shinowit.entity.SysMenuExample;
import com.shinowit.entity.SysRole;
import com.shinowit.entity.SysRoleExample;
import com.shinowit.framework.controller.BaseController;
import com.shinowit.framework.model.TreeNode;
import com.shinowit.framework.model.TreeNodeCheckable;
import org.springframework.jdbc.core.JdbcTemplate;
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
@RequestMapping(value = "/sysrole")
public class SysRoleController extends BaseController {

    @Resource
    private SysRoleMapper sysrole_dao;

    @Resource
    private SysMenuMapper sys_menu_dao;

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

            fillBindingErrorToResult(bindResult, result);
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

            fillBindingErrorToResult(bindResult, result);
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

    private void querySubMenuByRoleCode(String roleCode,TreeNode<SysMenu> parent_node){
        if ((null==parent_node) || (parent_node.getData()==null)){
            return;
        }
        List<SysMenu> submenus=sys_menu_dao.selectSubMenuByRoleAndParentMenuCode(roleCode, parent_node.getData().getMenuCode());
        if (null!=submenus){
            for (SysMenu menu:submenus){
                TreeNode<SysMenu> node=new TreeNode<SysMenu>();
                node.setData(menu);

                parent_node.addChild(node);

                querySubMenuByRoleCode(roleCode,node);
            }
        }
    }

    @RequestMapping(value="/menutree")
    @ResponseBody
    public Map<String,Object> getMenuTreeByRoleCode(@RequestParam("rolecode") String roleCode){
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            TreeNode<SysMenu> rootNode=new TreeNode<SysMenu>();
            //取顶级节点
            List<SysMenu> top_menus=sys_menu_dao.selectTopMenuByRole(roleCode);

            for (SysMenu menu:top_menus){
                TreeNode<SysMenu> node=new TreeNode<SysMenu>();
                node.setData(menu);

                rootNode.addChild(node);

                querySubMenuByRoleCode(roleCode, node);
            }

            result.put("success",true);
            result.put("menudata",rootNode);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        return result;
    }

    private void querySubMenu(TreeNodeCheckable<SysMenu> parent_node){
        if ((null==parent_node) || (parent_node.getData()==null)){
            return;
        }
        SysMenuExample ex=new SysMenuExample();
        ex.createCriteria().andParentMenuCodeEqualTo(parent_node.getData().getMenuCode());

        List<SysMenu> submenus=sys_menu_dao.selectByExample(ex);
        if (null!=submenus){
            for (SysMenu menu:submenus){
                TreeNodeCheckable<SysMenu> node=new TreeNodeCheckable<SysMenu>();
                node.setData(menu);

                parent_node.addChild(node);

                querySubMenu(node);
            }
        }
    }

    @RequestMapping(value="/fullmenutree")
    @ResponseBody
    public Map<String,Object> getFullMenuTree(){
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            TreeNodeCheckable<SysMenu> rootNode=new TreeNodeCheckable<SysMenu>();
            SysMenuExample ex=new SysMenuExample();
            ex.createCriteria().andParentMenuCodeIsNull();
            //取顶级节点
            List<SysMenu> top_menus=sys_menu_dao.selectByExample(ex);

            for (SysMenu menu:top_menus){
                TreeNodeCheckable<SysMenu> node=new TreeNodeCheckable<SysMenu>();
                node.setData(menu);

                rootNode.addChild(node);

                querySubMenu(node);
            }

            result.put("success",true);
            result.put("menudata",rootNode);
        } catch (Exception e) {
            result.put("success", false);
            result.put("msg", "数据库操作异常!");
            if (logger.isDebugEnabled()) {
                logger.error(e.getMessage(), e);
            }
            return result;
        }
        return result;
    }

}