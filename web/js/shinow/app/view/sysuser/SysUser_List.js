/**
 * <p>
 * 系统用户信息表 主列表view
 * </p>
 *
 * @author 代码生成器
 * @class app.view.sysuser.SysUser_List
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.sysuser.SysUser_List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SysUser_List',
    store: 'SysUser',
    layout: {
        type: 'border'
    },
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            tbar: [{
                text: '新增',
                action: 'add',
                iconCls: 'add-btn-icon'
            }, '-', {
                text: '修改',
                action: 'edit',
                iconCls: 'edit-btn-icon'
            }, '-', {
                text: '删除',
                action: 'del',
                iconCls: 'del-btn-icon'
            }],
            items: [
                {
                    region: 'east',
                    xtype: 'panel',
                    layout: 'fit',
                    width: 200,
                    title: '用户对应角色',
                    items: [
                        {
                            xtype: 'checkboxgroup',
                            id:'user_list_role_checkboxgroup',
                            region: 'east',
                            columns: 1,
                            disabled:true
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    selType: 'rowmodel',
                    store: 'SysUser',
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
                            text: '系统用户id',
                            dataIndex: 'userId'
                        },
                        {
                            text: '用户真实姓名',
                            dataIndex: 'realName'
                        },
                        {
                            text: '用户登录名称',
                            dataIndex: 'loginName'
                        },
                        {
                            text: '地址',
                            dataIndex: 'address'
                        },
                        {
                            text: '联系电话',
                            dataIndex: 'linkTel'
                        },
                        {
                            text: 'qq号码',
                            dataIndex: 'qq'
                        },
                        {
                            text: 'email地址',
                            dataIndex: 'email'
                        },
                        {
                            text: '手机号码',
                            dataIndex: 'mobile'
                        },
                        {
                            text: '排序编码',
                            dataIndex: 'sortId'
                        },
                        {
                            text: '状态',
                            dataIndex: 'status'
                        }
                    ],
                    dockedItems: [{
                        xtype: 'pagingtoolbar',
                        store: 'SysUser',
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