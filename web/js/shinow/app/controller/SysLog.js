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
            store.loadPage(1, {
                    params: {
                        login_name: '',
                        menus: null
                    }
                }
            );
        }
        ,
        query: function (btn) {
            var store = btn.up('panel').down('gridpanel').getStore();

            var checked_records = Ext.getCmp('sys_log_query_menu_name_combobox').tree.getChecked();
            console.log(checked_records.length);
            var menu_data = new Array();
            Ext.each(checked_records, function (node, index) {
                if (node.internalId != '-1') {
                    menu_data.push(node.internalId);
                }
            });


            store.loadPage(1, {
                    params: {
                        login_name: Ext.getCmp('sys_log_query_login_name').getValue(),
                        menus: menu_data
                    }
                }
            );
        }
    }
);