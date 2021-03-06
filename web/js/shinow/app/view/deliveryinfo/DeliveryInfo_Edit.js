/**
 * <p>
 * 配送商信息表 修改数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.deliveryinfo.DeliveryInfo_Edit
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.deliveryinfo.DeliveryInfo_Edit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.DeliveryInfo_Edit',
    layout: 'border',
    width: 400,
    height: 240,
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
                            name: 'deliveryCode',
                            xtype: 'hiddenfield'
                        },

                        {
                            maxLength: 50,
                            name: 'deliveryName',
                            maxLengthText: '配送商名称不能多于50个字符',
                            fieldLabel: '配送商名称'
                        },

                        {
                            maxLength: 150,
                            name: 'address',
                            maxLengthText: '地址不能多于150个字符',
                            fieldLabel: '地址'
                        },

                        {
                            maxLength: 20,
                            name: 'linkName',
                            maxLengthText: '联系人不能多于20个字符',
                            fieldLabel: '联系人'
                        },

                        {
                            maxLength: 20,
                            name: 'linkTel',
                            maxLengthText: '联系电话不能多于20个字符',
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