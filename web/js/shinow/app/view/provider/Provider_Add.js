/**
 * <p>
 * 供应商信息表 新增数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.provider.Provider_Add
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.provider.Provider_Add', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Provider_Add',
    layout: 'border',
    width: 400,
    height: 270,
    border: false,
    buttonAlign: 'center',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    region: "center",
                    xtype: 'form',
                    defaultType: 'textfield',
                    labelAlign: 'right',
                    width: 'auto',
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
                            maxLength: 6,
                            name: 'providerCode',
                            maxLengthText: '供应商编码不能多于6个字符',
                            fieldLabel: '供应商编码'
                        },

                        {
                            maxLength: 50,
                            name: 'providerName',
                            maxLengthText: '供应商名称不能多于50个字符',
                            fieldLabel: '供应商名称'
                        },

                        {
                            maxLength: 200,
                            name: 'address',
                            maxLengthText: '地址不能多于200个字符',
                            fieldLabel: '地址',
                            allowBlank: true
                        },

                        {
                            maxLength: 20,
                            name: 'linkName',
                            maxLengthText: '联系人不能多于20个字符',
                            fieldLabel: '联系人'
                        },

                        {
                            maxLength: 50,
                            name: 'linkTel',
                            maxLengthText: '联系电话不能多于50个字符',
                            fieldLabel: '联系电话'
                        },

                        {
                            maxLength: 50,
                            name: 'qq',
                            maxLengthText: 'QQ不能多于50个字符',
                            fieldLabel: 'QQ',
                            allowBlank: true
                        },

                        {
                            maxLength: 50,
                            name: 'email',
                            maxLengthText: 'Email不能多于50个字符',
                            fieldLabel: 'Email',
                            allowBlank: true
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
                }
            ]
            ,
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