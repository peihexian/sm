Ext.define('app.view.syslog.SysLog_List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SysLog_List',
    requires:['Ext.ux.TreeCombo'],
    store: 'SysLog',
    layout: {
        type: 'border'
    },
    initComponent: function () {
        var me = this;

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


        Ext.applyIf(me, {
            tbar: [
                '-',
                {
                    xtype:'textfield',
                    fieldLabel: '用户登录名称',
                    labelWidth:80,
                    id:'sys_log_query_login_name',
                    name: 'login_name'
                }
                ,
                {
                    xtype: 'treecombo',
                    name: 'menu_name',
                    id:'sys_log_query_menu_name_combobox',
                    margin: '0 0 0 5',
                    fieldLabel: '系统功能',
                    labelWidth:70,
                    emptyText: "请选择",
                    store: store
                }
                ,
                {
                    text: '查询',
                    action: 'query',
                    iconCls: 'add-btn-icon'
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    selType: 'rowmodel',
                    store: 'SysLog',
                    columnLines: true,
                    forceFit: true,
                    width: '100%',
                    height: '100%',
                    defaults: {
                        flex: 1,
                        align: 'center'
                    },
                    columns: [
                        {
                            text: '日志id',
                            dataIndex: 'log_id'
                        },
                        {
                            text: '系统用户',
                            dataIndex: 'login_name'
                        },
                        {
                            text: '操作功能',
                            dataIndex: 'menu_name'
                        }
                        ,
                        {
                            text: '操作时间',
                            dataIndex: 'log_time',
                            renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')
                        }
                        ,
                        {
                            text: '用户ip',
                            dataIndex: 'ip'
                        }
                        ,
                        {
                            text: '日志内容',
                            dataIndex: 'content'
                        }
                    ],
                    dockedItems: [{
                        xtype: 'pagingtoolbar',
                        store: 'SysLog',
                        dock: 'bottom',
                        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
                        emptyMsg: "没有数据",
                        afterPageText: "页  共{0}页",
                        beforePageText: "第",
                        displayInfo: true
                    }]
                }
            ]
        });
        me.callParent(arguments);
        Ext.getCmp('sys_log_query_menu_name_combobox').tree.expandAll();
    }
});