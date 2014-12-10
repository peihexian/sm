/**
 * <p>
 * 入库信息表 controller
 * </p>
 *
 * @author 代码生成器
 * @class app.controller.InStock
 * @extends Ext.app.Controller
 */
Ext.define('app.controller.InStock', {
        extend: 'Ext.app.Controller',
        alias: 'controller.InStock',
        requires: ['app.model.InStock', 'app.store.InStock', 'app.view.instock.InStock_List', 'app.view.instock.InStock_Add', 'app.view.instock.InStock_Edit','app.store.InStockDetail'],
        models: ['InStock'],
        views: ['instock.InStock_List', 'instock.InStock_Add', 'instock.InStock_Edit'],
        stores: ['InStock'],
        refs: [
            {
                ref: 'instock_gridpanel',
                selector: 'InStock_List>gridpanel[id=in_stock_list_gridpanel_1]'
            }
        ],
        init: function (application) {
            var me = this;
            me.control({
                'InStock_List>gridpanel[id=in_stock_list_gridpanel_1]': {
                    render: this.loadDefaultListData,
                    afterrender: function (grid) {
                        var selModel = grid.getSelectionModel();
                        selModel.myGrid = grid;
                    },
                    selectionchange: function (selModel, selected, eOpts) {
                        var grid = selModel.theLookupGrid;
                        me.loadDetails();
                    }
                },
                'InStock_List>toolbar button[action=add]': {
                    click: this.add
                },
                'InStock_List>toolbar button[action=edit]': {
                    click: this.edit
                },
                'InStock_List>toolbar button[action=del]': {
                    click: this.del
                },
                'InStock_Add  button[action=save]': {
                    click: this.save_add
                },
                'InStock_Edit  button[action=save]': {
                    click: this.save_edit
                }
            });
        },
        loadDefaultListData: function (obj) {
            var store = obj.getStore();
            store.loadPage(1);
        },
        loadDetails: function () {
            var me = this;
            var rec = me.getInstock_gridpanel().getSelectionModel().getSelection()[0];
            if (rec) {
                var store=Ext.getCmp('in_stock_list_detail_gridpanel').getStore();
                store.getProxy().setExtraParam('in_stock_id',rec.get('inStockId'));
                store.loadPage(1,{limit:10000});
            }
        },
        add: function (btn) {
            //用于新增数据的方法
            var window_id = 'InStock_add_window';

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
            var new_record = Ext.create('app.model.InStock', {
                //default data
            });

            var _view = Ext.widget('InStock_Add');
            add_window = Ext.create('Ext.window.Window', {
                id: window_id,
                title: '新增入库信息',
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
             var add_window = desktop.createWindow({
             id: window_id,
             title:'新增入库信息表',
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
        },
        //保存新增的数据
        save_add: function (btn) {
            var me = this;
            var add_window = btn.up('window');
            var form = add_window.down('form').getForm();
            if (form.isValid()) {
                form.submit({
                    url: GLOBAL_ROOT_PATH + "/instock/add",
                    waitTitle: '提示',
                    waitMsg: '正在提交数据,请稍候...',
                    success: function (form, action) {
                        if (true == action.result.success) {
                            Ext.Msg.alert('成功', action.result.msg);
                            me.getInstock_gridpanel().getStore().reload();
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
                        url: GLOBAL_ROOT_PATH + '/instock/del',
                        params: {
                            id: rec.get('inStockId')
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
            var window_id = 'InStock_edit_window';

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

            var _view = Ext.widget('InStock_Edit');

            edit_window = Ext.create('Ext.window.Window', {
                id: window_id,
                title: '编辑入库信息表',
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
             title:'编辑入库信息表',
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
            var providerCode_combobox = edit_window.down('textfield[name=providerCode]');
            providerCode_combobox.getStore().load(
                function (records, operation, success) {
                    if (true == success) {
                        providerCode_combobox.setValue(edit_record.get('providerCode'));
                    }
                }
            );
            var userId_combobox = edit_window.down('textfield[name=userId]');
            userId_combobox.getStore().load(
                function (records, operation, success) {
                    if (true == success) {
                        userId_combobox.setValue(edit_record.get('userId'));
                    }
                }
            );
            edit_window.show();
        },
        //保存修改结果的方法
        save_edit: function (btn) {
            var me = this;
            var edit_window = btn.up('window');
            var form = edit_window.down('form').getForm();
            if (form.isValid()) {
                form.submit({
                    url: GLOBAL_ROOT_PATH + "/instock/edit",
                    waitTitle: '提示',
                    waitMsg: '正在提交数据,请稍候...',
                    success: function (form, action) {
                        if (true == action.result.success) {
                            Ext.Msg.alert('成功', action.result.msg);
                            me.getInstock_gridpanel().getStore().reload();
                            me.getInstock_gridpanel().getSelectionModel().deselectAll();
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