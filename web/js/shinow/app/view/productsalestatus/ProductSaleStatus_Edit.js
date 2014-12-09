/**
 * <p>
 * 商品促销状态字典 修改数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.productsalestatus.ProductSaleStatus_Edit
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.productsalestatus.ProductSaleStatus_Edit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProductSaleStatus_Edit',
    layout: 'border',
    width: 380,
    height: 110,
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
                            name: 'statusId',
                            xtype: 'hiddenfield'
                        },

                        {
                            maxLength: 20,
                            name: 'statusName',
                            maxLengthText: '促销状态名称不能多于20个字符',
                            fieldLabel: '促销状态名称'
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
                        },

                        {
                            maxLength: 50,
                            name: 'memo',
                            maxLengthText: '备注不能多于50个字符',
                            fieldLabel: '备注'
                        }
                    ]
                }]
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