/**
 * <p>
 * 角色信息表 新增数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.sysrole.SysRole_Add
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.sysrole.SysRole_Add', {
    extend: 'Ext.form.Panel',
    alias: 'widget.SysRole_Add',
    layout: 'border',
    width: 400,
    height: 435,
    border: false,
    buttonAlign: 'center',
    mytreestore: null,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    region: "north",
                    xtype: 'panel',
                    defaultType: 'textfield',
                    labelAlign: 'right',
                    border: false,
                    buttonAlign: 'center',
                    defaults: {
                        allowBlank: false,
                        autowidth: true,
                        margin: '5 5 5 5',
                        labelAlign: 'right',
                        height: 20,
                        width: 299
                    },
                    items: [
                        {
                            name: 'roleCode',
                            fieldLabel: '角色编码'
                        },

                        {
                            maxLength: 20,
                            name: 'roleName',
                            maxLengthText: '角色名称不能多于20个字符',
                            fieldLabel: '角色名称'
                        },

                        {
                            name: 'sortId',
                            fieldLabel: '排序编码'
                        },

                        {
                            xtype: 'combobox',
                            name: 'status',
                            fieldLabel: '状态',
                            forceSelection: true,
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
                    ]
                }, {
                    region: "center",
                    xtype: 'panel',
                    height: 300,
                    border: false,
                    title: '请选择菜单权限',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'treepanel',
                            id: 'role_add_tree_panel',
                            width: 300,
                            collapsible: false,
                            store: me.mytreestore,
                            listeners: {
                                checkchange: function (node, checked) {
                                    node.expand();
                                    node.checked = checked;
                                    node.eachChild(function(child) {
                                        child.set('checked', checked);
                                        child.fireEvent('checkchange', child, checked);
                                    });

                                }
                            }
                        }
                    ]

                }
            ],
            buttons: [
                {
                    text: '保存',
                    action: 'save'
                },
                {
                    text: '关闭',
                    scope: this,
                    handler: function (btn) {
                        btn.up('window').close();
                    }
                }
            ]

        });
        this.callParent(arguments);
    }
});