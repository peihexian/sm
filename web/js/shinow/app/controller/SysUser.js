/**
 * <p>
 * 系统用户信息表 controller
 * </p>
 *
 * @author 代码生成器
 * @class app.controller.SysUser
 * @extends Ext.app.Controller
 */
Ext.define('app.controller.SysUser', {
        extend: 'Ext.app.Controller',
        alias: 'controller.SysUser',
        requires: ['app.model.SysUser', 'app.store.SysUser', 'app.view.sysuser.SysUser_List', 'app.view.sysuser.SysUser_Add', 'app.view.sysuser.SysUser_Edit'],
        models: ['SysUser'],
        views: ['sysuser.SysUser_List', 'sysuser.SysUser_Add', 'sysuser.SysUser_Edit'],
        stores: ['SysUser'],
        refs: [
            {
                ref: 'sysuser_gridpanel',
                selector: 'SysUser_List>gridpanel'
            }
        ],
        init: function (application) {
            var me = this;
            me.control({
                'SysUser_List>gridpanel': {
                    render: this.loadDefaultListData,
                    selectionchange: function (selModel, selected, eOpts) {
                        var grid = selModel.theLookupGrid;
                        me.loadUserRoles();
                    }
                },
                'SysUser_List>toolbar button[action=add]': {
                    click: this.add
                },
                'SysUser_List>toolbar button[action=edit]': {
                    click: this.edit
                },
                'SysUser_List>toolbar button[action=del]': {
                    click: this.del
                },
                'SysUser_Add  button[action=save]': {
                    click: this.save_add
                },
                'SysUser_Edit  button[action=save]': {
                    click: this.save_edit
                }
            });
        },
        loadDefaultListData: function (obj) {
            var store = obj.getStore();
            store.loadPage(1);
        },
        loadUserRoles: function () {
            var me = this;
            var rec = me.getSysuser_gridpanel().getSelectionModel().getSelection()[0];
            if (rec) {
                Ext.MessageBox.wait({
                    title: '请稍候',
                    msg: '正在加载数据，请耐心等待...',
                    wait: true,
                    progress: true,
                    closable: true,
                    waitConfig: {
                        interval: 200
                    },
                    icon: Ext.Msg.INFO
                });

                Ext.Ajax.request({
                    url: GLOBAL_ROOT_PATH + '/sysuser/user_role?user_id=' + rec.get('userId'),
                    scope: me,
                    async: false,
                    success: function (response) {
                        var json_obj = Ext.JSON.decode(response.responseText);
                        Ext.MessageBox.hide();
                        Ext.getCmp('user_list_role_checkboxgroup').removeAll();
                        Ext.getCmp('user_list_role_checkboxgroup').add(Ext.Array.map(json_obj.roles, function(record) {
                            return {
                                boxLabel: record.role_name,
                                inputValue: record.role_code,
                                name: 'user_role'
                            };
                        }));
                    }
                });

            }

        },
        add: function (btn) {
            var me=this;
            //用于新增数据的方法
            var window_id = 'SysUser_add_window';

            //以下检测是否该窗口已经打开,如果已经打开则不再重新创建新窗口
            var add_window = Ext.getCmp(window_id);
            if (add_window) {
                add_window.show();
                return;
            }
            /*
             var desktop = this.app.getDesktop();
             if (desktop.getWindow(window_id)){
             desktop.restoreWindow(desktop.getWindow(window_id));
             return;
             }
             */

            var store = btn.up('panel').down('gridpanel').getStore();
            var new_record = Ext.create('app.model.SysUser', {
                //default data
            });

            var _view = Ext.widget('SysUser_Add');
            add_window = Ext.create('Ext.window.Window', {
                id: window_id,
                title: '新增系统用户信息',
                layout: "fit",
                closable: true,
                modal: false,
                border:false,
                closeAction: "destroy",
                items: [_view],
                iconCls: 'bogus',
                maximizable: false,
                animCollapse: false,
                constrainHeader: true
            });

            /*
             var add_window = desktop.createWindow({
             id: window_id,
             title:'新增系统用户信息表',
             layout:"fit",
             closable:true,
             closeAction:"destroy",
             items:[_view],
             iconCls: 'bogus',
             maximizable:false,
             animCollapse:false,
             constrainHeader:true
             });
             */

            Ext.MessageBox.wait({
                title: '请稍候',
                msg: '正在加载数据，请耐心等待...',
                wait: true,
                progress: true,
                closable: true,
                waitConfig: {
                    interval: 200
                },
                icon: Ext.Msg.INFO
            });

            Ext.Ajax.request({
                url: GLOBAL_ROOT_PATH + '/sysuser/user_role_all',
                scope: me,
                async: false,
                success: function (response) {
                    var json_obj = Ext.JSON.decode(response.responseText);
                    Ext.MessageBox.hide();
                    Ext.getCmp('user_add_role_checkboxgroup').removeAll();
                    Ext.getCmp('user_add_role_checkboxgroup').add(Ext.Array.map(json_obj.roles, function(record) {
                        return {
                            boxLabel: record.roleName,
                            inputValue: record.roleCode,
                            name: 'user_role'
                        };
                    }));
                }
            });

            add_window.down('form').loadRecord(new_record);
            add_window.show();
        },
        //保存新增的数据
        save_add: function (btn) {
            var me = this;
            var add_window = btn.up('window');
            var form = add_window.down('form').getForm();

            var role_check_box_group=Ext.getCmp('user_add_role_checkboxgroup');
            var role_check_datas=new Array();
            for (var i = 0; i < role_check_box_group.items.length; i++)
            {
                if (role_check_box_group.items.getAt(i).checked)
                {
                    role_check_datas.push(role_check_box_group.items.getAt(i).inputValue);
                    //alert(role_check_box_group.items.itemAt(i).name);
                }
            }

            if (role_check_datas.length==0){
                Ext.Msg.alert('错误','请选择用户角色!');
                return ;
            }

            if (form.isValid()) {
                form.submit({
                    params:{roleCodes:role_check_datas},
                    url: GLOBAL_ROOT_PATH + "/sysuser/add",
                    waitTitle: '提示',
                    waitMsg: '正在提交数据,请稍候...',
                    success: function (form, action) {
                        if (true == action.result.success) {
                            Ext.Msg.alert('成功', action.result.msg);
                            me.getSysuser_gridpanel().getStore().reload();
                            add_window.close();
                        } else {
                            Ext.Msg.alert('错误', action.result.msg);
                            form.markInvalid(action.result.errors);
                        }
                    },
                    failure: function (form, action) {
                        if (action.result) {
                            Ext.Msg.alert('错误', action.result.msg);
                            form.markInvalid(action.result.errors);
                        } else {
                            Ext.Msg.alert('错误', '网络或者其他错误!');
                        }
                    }
                });
            }
        },
        //删除数据
        del: function (btn) {
            var store = btn.up('panel').down('gridpanel').getStore();
            var grid = btn.up('panel').down('gridpanel');
            var sm = grid.getSelectionModel();
            var sel_count = sm.getCount();
            if (sel_count != 1) {
                Ext.Msg.alert('错误', '请先选中要删除的记录!');
                return;
            }
            var rec = sm.getSelection()[0];
            Ext.MessageBox.confirm("提示", "您确定要删除这些信息吗?", function (button, text) {
                if (button == 'yes') {
                    Ext.Ajax.request({
                        url: GLOBAL_ROOT_PATH + '/sysuser/del',
                        params: {
                            id: rec.get('userId')
                        },
                        success: function (response) {
                            var text = response.responseText;
                            var jsonObj = eval("(" + text + ")");
                            if (true == jsonObj.success) {
                                Ext.Msg.alert('成功', jsonObj.msg);
                                store.reload();
                                if (store.getCount() > 0) {
                                    sm.select(0);
                                }
                                ;
                            } else {
                                Ext.Msg.alert('失败', jsonObj.msg);
                            }
                        }
                    });
                }
            });
        },
        //打开编辑窗口并加载待编辑数据
        edit: function (btn) {
            var window_id = 'SysUser_edit_window';

            //以下检测是否该窗口已经打开,如果已经打开则不再重新创建新窗口
            var edit_window = Ext.getCmp(window_id);
            if (edit_window) {
                edit_window.show();
                return;
            }

            /*
             var desktop = this.app.getDesktop();
             if (desktop.getWindow(window_id)){
             desktop.restoreWindow(desktop.getWindow(window_id));
             return;
             }
             */

            var store = btn.up('panel').down('gridpanel').getStore();
            var grid = btn.up('panel').down('gridpanel');
            var sm = grid.getSelectionModel();
            var sel_count = sm.getCount();
            if (sel_count != 1) {
                Ext.Msg.alert('错误', '请先选中要编辑的记录!');
                return;
            }
            var edit_record = sm.getSelection()[0];

            var _view = Ext.widget('SysUser_Edit');

            edit_window = Ext.create('Ext.window.Window', {
                id: window_id,
                title: '编辑系统用户信息表',
                layout: "fit",
                closable: true,
                modal: false,
                closeAction: "destroy",
                items: [_view],
                iconCls: 'bogus',
                maximizable: false,
                animCollapse: false,
                constrainHeader: true
            });

            /*
             var edit_window = desktop.createWindow({
             id: window_id,
             title:'编辑系统用户信息表',
             layout:"fit",
             width:440,
             height:280,
             closable:true,
             closeAction:"destroy",
             items:[_view],
             iconCls: 'bogus',
             maximizable:false,
             animCollapse:false,
             constrainHeader:true
             });
             */

            edit_window.down('form').loadRecord(edit_record);
            //加载下拉列表框值及赋予缺省值
            edit_window.show();
        },
        //保存修改结果的方法
        save_edit: function (btn) {
            var me = this;
            var edit_window = btn.up('window');
            var form = edit_window.down('form').getForm();
            if (form.isValid()) {
                form.submit({
                    url: GLOBAL_ROOT_PATH + "/sysuser/edit",
                    waitTitle: '提示',
                    waitMsg: '正在提交数据,请稍候...',
                    success: function (form, action) {
                        if (true == action.result.success) {
                            Ext.Msg.alert('成功', action.result.msg);
                            me.getSysuser_gridpanel().getStore().reload();
                            me.getSysuser_gridpanel().getSelectionModel().deselectAll();
                            edit_window.close();
                        } else {
                            Ext.Msg.alert('错误', action.result.msg);
                            form.markInvalid(action.result.errors);
                        }
                    },
                    failure: function (form, action) {
                        if (action.result) {
                            Ext.Msg.alert('错误', action.result.msg);
                            form.markInvalid(action.result.errors);
                        } else {
                            Ext.Msg.alert('错误', '网络或者其他错误!');
                        }
                    }
                });
            }
        }
    }
);