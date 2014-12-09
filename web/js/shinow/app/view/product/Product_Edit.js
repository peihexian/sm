/**
 * <p>
 * 商品信息表 修改数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.product.Product_Edit
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.product.Product_Edit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Product_Edit',
    layout: 'border',
    width: 400,
    height: 330,
    border:false,
    buttonAlign: 'center',
    initComponent: function () {
        var me = this;
        var typeCode_store = Ext.create('app.store.ProductType', {
            pageSize: 1000,
            autoLoad: false
        });

        var unitId_store = Ext.create('app.store.ProductUnit', {
            pageSize: 1000,
            autoLoad: false
        });
        var statusId_store = Ext.create('app.store.ProductSaleStatus', {
            pageSize: 1000,
            autoLoad: false
        });
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
                            name: 'productCode',
                            xtype: 'hiddenfield'
                        },
                        {
                            xtype: 'combobox',
                            name: 'typeCode',
                            editable: false,
                            forceSelection: true,
                            labelAlign: 'right',
                            fieldLabel: '商品类别编码',
                            store: typeCode_store,
                            queryMode: 'local',
                            displayField: 'typeName',
                            valueField: 'typeCode',
                            allowBlank: false,
                            emptyText: '请选择'
                        },

                        {
                            xtype: 'combobox',
                            name: 'unitId',
                            editable: false,
                            forceSelection: true,
                            labelAlign: 'right',
                            fieldLabel: '商品单位分类id',
                            store: unitId_store,
                            queryMode: 'local',
                            displayField: 'name',
                            valueField: 'unitId',
                            allowBlank: false,
                            emptyText: '请选择'
                        },

                        {
                            xtype: 'combobox',
                            name: 'statusId',
                            editable: false,
                            forceSelection: true,
                            labelAlign: 'right',
                            fieldLabel: '促销状态编码',
                            store: statusId_store,
                            queryMode: 'local',
                            displayField: 'statusName',
                            valueField: 'statusId',
                            allowBlank: false,
                            emptyText: '请选择'
                        },

                        {
                            maxLength: 50,
                            name: 'productName',
                            maxLengthText: '商品名称不能多于50个字符',
                            fieldLabel: '商品名称'
                        },
                        {
                            name: 'price',
                            fieldLabel: '商品价格'
                        },

                        {
                            xtype: 'combobox',
                            name: 'valid',
                            fieldLabel: '可售状态',
                            forceSelection: true,
                            emptyText: "请选择",
                            store: new Ext.data.SimpleStore({
                                fields: ['key', 'value'],
                                data: [
                                    ['true', '在售'],
                                    ['false', '未在售']
                                ]
                            }),
                            displayField: "value",
                            valueField: "key",
                            mode: "local"
                        },

                        {
                            maxLength: 200,
                            name: 'spec',
                            maxLengthText: '规格不能多于200个字符',
                            fieldLabel: '规格',
                            allowBlank: true
                        },

                        {
                            maxLength: 200,
                            name: 'describeTxt',
                            maxLengthText: '描述不能多于200个字符',
                            fieldLabel: '描述',
                            allowBlank: true
                        },

                        {
                            maxLength: 100,
                            name: 'picPath',
                            maxLengthText: '图片不能多于100个字符',
                            fieldLabel: '图片',
                            allowBlank: true
                        },

                        {
                            name: 'clickCount',
                            fieldLabel: '点击数',
                            allowBlank: true
                        },

                        {
                            maxLength: 100,
                            name: 'memo',
                            maxLengthText: '备注不能多于100个字符',
                            fieldLabel: '备注',
                            allowBlank: true
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