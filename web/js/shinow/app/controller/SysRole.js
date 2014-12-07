/**
 * <p>
 * 角色信息表 controller
 * </p>
 *
 * @author 代码生成器
 * @class app.controller.SysRole
 * @extends Ext.app.Controller
 */
Ext.define('app.controller.SysRole', {
        extend: 'Ext.app.Controller',
        alias: 'controller.SysRole',
        requires: ['app.model.SysRole', 'app.store.SysRole', 'app.view.sysrole.SysRole_List', 'app.view.sysrole.SysRole_Add', 'app.view.sysrole.SysRole_Edit'],
        models: ['SysRole'],
        views: ['sysrole.SysRole_List', 'sysrole.SysRole_Add', 'sysrole.SysRole_Edit'],
        stores: ['SysRole'],
        refs: [
            {
                ref: 'sysrole_gridpanel',
                selector: 'SysRole_List>gridpanel'
            },
            {
                ref: 'sysrole_tree_panel',
                selector: 'SysRole_List>treepanel'
            }
        ],
        init: function (application) {
            var me = this;
            me.control({
                'SysRole_List>gridpanel': {
                    render: this.loadDefaultListData,
                    afterrender: function (grid) {
                        var selModel = grid.getSelectionModel();
                        selModel.myGrid = grid;
                    },
                    selectionchange: function (selModel, selected, eOpts) {
                        var grid = selModel.theLookupGrid;
                        me.loadRoleMenu();
                    }
                },
                'SysRole_List>toolbar button[action=add]': {
                    click: this.add
                },
                'SysRole_List>toolbar button[action=edit]': {
                    click: this.edit
                },
                'SysRole_List>toolbar button[action=del]': {
                    click: this.del
                },
                'SysRole_Add  button[action=save]': {
                    click: this.save_add
                },
                'SysRole_Edit  button[action=save]': {
                    click: this.save_edit
                }
            });
        },
        loadRoleMenu: function () {
            var me = this;
            var rec = me.getSysrole_gridpanel().getSelectionModel().getSelection()[0];
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
                    url: GLOBAL_ROOT_PATH + '/sysrole/menutree?rolecode=' + rec.get('roleCode'),
                    scope: me,
                    async: false,
                    success: function (response) {
                        var json_obj = Ext.JSON.decode(response.responseText);
                        me.getSysrole_tree_panel().getRootNode().removeAll(false);
                        me.getSysrole_tree_panel().setRootNode(json_obj.menudata);
                        me.getSysrole_tree_panel().getRootNode().data.text = '角色' + rec.get('roleName') + '对应权限';
                        me.getSysrole_tree_panel().expandAll();
                        Ext.MessageBox.hide();
                    }
                });

            }
        },
        loadDefaultListData: function (obj) {
            var store = obj.getStore();
            store.loadPage(1);
        },
        add: function (btn) {
            var me = this;
            //用于新增数据的方法
            var window_id = 'SysRole_add_window';

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
            var new_record = Ext.create('app.model.SysRole', {
                //default data
            });

            Ext.Ajax.request({
                url: GLOBAL_ROOT_PATH + '/sysrole/fullmenutree',
                async: false,
                success: function (response) {
                    me.treeData = response.responseText;
                    if (typeof(me.treeData) === 'string') {
                        me.treeData = Ext.JSON.decode(me.treeData);
                    }
                }
            });
            var store = Ext.create("Ext.data.TreeStore", {
                fields: [
                    {name: 'id', type: 'string', mapping: 'data.menuCode'},
                    {name: 'text', type: 'string', mapping: 'data.menuName'},
                    {name: 'checked', type: 'boolean', mapping: 'data.checked'}
                ]
                ,
                root: {
                    text: '角色对应权限',
                    id: '-1',
                    children: me.treeData.menudata.children
                }
            });

            var _view = Ext.widget('SysRole_Add', {mytreestore: store});
            add_window = Ext.create('Ext.window.Window', {
                id: window_id,
                title: '新增角色信息表',
                layout: "fit",
                closable: true,
                modal: false,
                border: false,
                closeAction: "destroy",
                items: [_view],
                //iconCls: 'bogus',
                maximizable: false,
                animCollapse: false,
                constrainHeader: true
            });

            /*
             var add_window = desktop.createWindow({
             id: window_id,
             title:'新增角色信息表',
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

            add_window.down('form').loadRecord(new_record);
            add_window.show();
            Ext.getCmp('role_add_tree_panel').expandAll();
            //me.getRole_add_treepanel().getRootNode().expandAll();

        },
        //保存新增的数据
        save_add: function (btn) {
            var me = this;
            var add_window = btn.up('window');
            var form = add_window.down('form').getForm();
            var checked_records = Ext.getCmp('role_add_tree_panel').getChecked();
            console.log(checked_records.length);
            var menu_data = new Array();
            Ext.each(checked_records, function (node, index) {
                if (node.data.id != '-1') {
                    menu_data.push(node.data.id);
                }

            });
            if (form.isValid()) {
                form.submit({
                    params: {
                        menus: menu_data
                    },
                    url: GLOBAL_ROOT_PATH + "/sysrole/add",
                    waitTitle: '提示',
                    waitMsg: '正在提交数据,请稍候...',
                    success: function (form, action) {
                        if (true == action.result.success) {
                            Ext.Msg.alert('成功', action.result.msg);
                            me.getSysrole_gridpanel().getStore().reload();
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
                        url: GLOBAL_ROOT_PATH + '/sysrole/del',
                        params: {
                            id: rec.get('roleCode')
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
            var me = this;
            var window_id = 'SysRole_edit_window';

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

            Ext.Ajax.request({
                url: GLOBAL_ROOT_PATH + '/sysrole/menutree_edit?rolecode=' + edit_record.get('roleCode'),
                async: false,
                success: function (response) {
                    me.treeData = response.responseText;
                    if (typeof(me.treeData) === 'string') {
                        me.treeData = Ext.JSON.decode(me.treeData);
                    }
                }
            });
            var store = Ext.create("Ext.data.TreeStore", {
                fields: [
                    {name: 'id', type: 'string', mapping: 'data.menu_code'},
                    {name: 'text', type: 'string', mapping: 'data.menu_name'},
                    {name: 'checked', type: 'boolean', mapping: 'data.checked'}
                ]
                ,
                root: {
                    text: '角色对应权限',
                    id: '-1',
                    children: me.treeData.menudata.children
                }
            });


            var _view = Ext.widget('SysRole_Edit', {mytreestore: store});

            edit_window = Ext.create('Ext.window.Window', {
                id: window_id,
                title: '编辑角色信息表',
                layout: "fit",
                closable: true,
                modal: false,
                border: false,
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
             title:'编辑角色信息表',
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

            Ext.getCmp('role_edit_tree_panel').expandAll();
        },
        save_edit: function (btn) {
            //保存修改结果的方法
            var me = this;
            var edit_window = btn.up('window');
            var form = edit_window.down('form').getForm();

            var checked_records = Ext.getCmp('role_edit_tree_panel').getChecked();
            console.log(checked_records.length);
            var menu_data = new Array();
            Ext.each(checked_records, function (node, index) {
                if (node.data.id != '-1') {
                    menu_data.push(node.data.id);
                }

            });
            if (form.isValid()) {
                form.submit({
                    params: {
                        menus: menu_data
                    },
                    url: GLOBAL_ROOT_PATH + "/sysrole/edit",
                    waitTitle: '提示',
                    waitMsg: '正在提交数据,请稍候...',
                    success: function (form, action) {
                        if (true == action.result.success) {
                            Ext.Msg.alert('成功', action.result.msg);
                            me.getSysrole_gridpanel().getStore().reload();
                            me.getSysrole_gridpanel().getSelectionModel().deselectAll();
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