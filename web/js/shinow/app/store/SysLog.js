Ext.define('app.store.SysLog', {
    extend: 'Ext.data.Store',
    alias: 'store.SysLog',
    requires: ['app.model.SysLog'],
    autoLoad: false,
    autoSync: false,
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'app.model.SysLog',
            pageSize: 19,
            proxy: {
                type: 'ajax',
                url: GLOBAL_ROOT_PATH + '/syslog/listbypage',
                actionMethods: {
                    read: "POST"
                },
                extraParams: {
                    'login_name':'',
                    'menus': null
                }
                ,
                api: {
                    read: GLOBAL_ROOT_PATH + "/syslog/listbypage"
                },
                reader: {
                    type: "json",
                    root: 'listData',
                    totalProperty: 'totalRecordCount'
                }
            }
        }, cfg)]);
    }
});