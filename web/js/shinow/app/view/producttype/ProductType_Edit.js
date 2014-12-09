/**
 * <p>
 * 商品类别信息表 修改数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.producttype.ProductType_Edit
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.producttype.ProductType_Edit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProductType_Edit',
    layout: 'border',
    width: 370,
    height: 120,
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
                    border:false,
                    buttonAlign: 'center',
                    defaults: {
                        allowBlank: false,
                        autowidth: true,
                        margin:'5 5 5 5',
                        labelAlign: 'right',
                        height: 20,
                        width: 299
                    },
                    items: [

                        {
                            name: 'typeCode',
                            xtype: 'hiddenfield'
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