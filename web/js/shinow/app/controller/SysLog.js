Ext.define('app.controller.SysLog', {
        extend: 'Ext.app.Controller',
        alias: 'controller.SysLog',
        requires: ['app.model.SysLog', 'app.store.SysLog', 'app.view.syslog.SysLog_List'],
        models: ['SysLog'],
        views: ['syslog.SysLog_List'],
        stores: ['SysLog'],
        refs: [
            {
                ref: 'syslog_gridpanel',
                selector: 'SysLog_List>gridpanel'
            }
        ],
        init: function (application) {
            var me = this;
            me.control({
                'SysLog_List>gridpanel': {
                    render: this.loadDefaultListData
                },
                'SysLog_List>toolbar button[action=query]': {
                    click: this.query
                }
            });
        }
        ,
        loadDefaultListData: function (obj) {
            var store = obj.getStore();
            store.loadPage(1);
        }
        ,
        query: function (btn) {
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
                        url: GLOBAL_ROOT_PATH + '/sysuserrole/del',
                        params: {
                            id: rec.get('id')
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
        }
    }
);