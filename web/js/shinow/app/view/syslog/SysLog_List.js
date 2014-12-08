Ext.define('app.view.syslog.SysLog_List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SysLog_List',
    store: 'SysLog',
    layout: {
        type: 'border'
    },
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            tbar: [
                '-',
                {
                    xtype:'textfield',
                    fieldLabel: '用户登录名称',
                    labelWidth:80,
                    name: 'login_name'
                }
                ,
                {
                    xtype: 'combobox',
                    name: 'menu_name',
                    margin: '0 0 0 5',
                    fieldLabel: '系统功能',
                    labelWidth:70,
                    emptyText: "请选择",
                    store: new Ext.data.SimpleStore({
                        fields: ['key', 'value'],
                        data: [
                            ['true', '启用'],
                            ['false', '未启用']
                        ]
                    }),
                    displayField: "value",
                    valueField: "key",
                    mode: "local"
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
                            dataIndex: 'user_name'
                        },
                        {
                            text: '操作功能',
                            dataIndex: 'menu_name'
                        }
                        ,
                        {
                            text: '操作时间',
                            dataIndex: 'log_time'
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
    }
});