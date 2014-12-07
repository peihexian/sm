/**
 * <p>
 * 系统用户信息表 修改数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.sysuser.SysUser_Edit
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.sysuser.SysUser_Edit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.SysUser_Edit',
    layout: 'border',
    width: 600,
    height: 300,
    border: false,
    buttonAlign: 'center',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    region: "north",
                    xtype: 'panel',
                    border:false,
                    items:[
                        {
                            xtype: 'form',
                            border:false,
                            layout:'form',
                            margin: '5 5 5 5',
                            items: [
                                {
                                    name: 'userId',
                                    xtype: 'hiddenfield'
                                },
                                {
                                    xtype:'panel',
                                    border:false,
                                    layout:'column',
                                    items:[
                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 20,
                                            name: 'realName',
                                            maxLengthText: '用户真实姓名不能多于20个字符',
                                            fieldLabel: '用户真实姓名',
                                            allowBlank: false,
                                            height:20,
                                            width:100
                                        },

                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 40,
                                            name: 'loginName',
                                            maxLengthText: '用户登录名称不能多于40个字符',
                                            fieldLabel: '用户登录名称',
                                            allowBlank: false,
                                            height:20,
                                            width:100

                                        }
                                    ]
                                }
                                ,

                                {
                                    xtype:'panel',
                                    border:false,
                                    layout:'column',
                                    items:[
                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 40,
                                            name: 'loginPass',
                                            inputType: 'password',
                                            allowBlank: false,
                                            maxLengthText: '用户密码不能多于40个字符',
                                            fieldLabel: '用户密码'
                                        },

                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 150,
                                            name: 'loginPass1',
                                            inputType: 'password',
                                            allowBlank: false,
                                            maxLengthText: '用户密码不能多于40个字符',
                                            fieldLabel: '密码重复'
                                        }
                                    ]
                                }
                                ,
                                {
                                    xtype:'textfield',
                                    columnWidth : .5,
                                    labelAlign: 'right',
                                    maxLength: 150,
                                    name: 'address',
                                    maxLengthText: '地址不能多于150个字符',
                                    fieldLabel: '联系地址'
                                },
                                {
                                    xtype:'panel',
                                    border:false,
                                    layout:'column',
                                    items:[
                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 50,
                                            name: 'linkTel',
                                            maxLengthText: '联系电话不能多于50个字符',
                                            fieldLabel: '联系电话'
                                        },

                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 50,
                                            name: 'qq',
                                            maxLengthText: 'qq号码不能多于50个字符',
                                            fieldLabel: 'qq号码'
                                        }
                                    ]
                                }
                                ,

                                {
                                    xtype:'panel',
                                    border:false,
                                    layout:'column',
                                    items:[
                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 50,
                                            name: 'email',
                                            maxLengthText: 'email地址不能多于50个字符',
                                            fieldLabel: 'email地址'
                                        },

                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            maxLength: 20,
                                            name: 'mobile',
                                            maxLengthText: '手机号码不能多于20个字符',
                                            fieldLabel: '手机号码'
                                        }
                                    ]
                                }
                                ,
                                {
                                    xtype:'panel',
                                    border:false,
                                    layout:'column',
                                    items:[
                                        {
                                            xtype:'textfield',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            name: 'sortId',
                                            fieldLabel: '排序编码'
                                        },

                                        {
                                            xtype: 'combobox',
                                            columnWidth : .5,
                                            labelAlign: 'right',
                                            name: 'status',
                                            fieldLabel: '启用状态',
                                            allowBlank: false,
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

                                }

                            ]
                        }
                    ]
                }
                ,
                {
                    region: 'center',
                    xtype: 'panel',
                    layout: 'fit',
                    border:false,
                    title: '用户对应角色',
                    autoScroll:true,
                    items: [
                        {
                            xtype: 'checkboxgroup',
                            id:'user_edit_role_checkboxgroup',
                            region: 'east',
                            columns: 3
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