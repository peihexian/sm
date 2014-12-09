/**
 * <p>
 * 商品类别信息表 新增数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.producttype.ProductType_Add
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.producttype.ProductType_Add', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProductType_Add',
    layout: 'border',
    width: 370,
    height: 140,
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
                            maxLength: 10,
                            name: 'typeCode',
                            maxLengthText: '商品类别编码不能多于10个字符',
                            fieldLabel: '商品类别编码'
                        },

                        {
                            maxLength: 50,
                            name: 'typeName',
                            maxLengthText: '商品类别名称不能多于50个字符',
                            fieldLabel: '商品类别名称'
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