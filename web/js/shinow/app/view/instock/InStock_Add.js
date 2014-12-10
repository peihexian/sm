/**
 * <p>
 * 入库信息表 新增数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.instock.InStock_Add
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.instock.InStock_Add', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.InStock_Add',
    layout: 'border',
    width: 650,
    height: 500,
    border: false,
    buttonAlign: 'center',
    initComponent: function () {
        var me = this;
        var providerCode_store = Ext.create('app.store.Provider', {
            pageSize: 1000,
            autoLoad: true
        });
        var userId_store = Ext.create('app.store.SysUser', {
            pageSize: 1000,
            autoLoad: true
        });

        var productCode_store = Ext.create('app.store.Product', {
            pageSize: 1000,
            autoLoad: true
        });
        Ext.applyIf(me, {
            items: [
                {
                    region: "north",
                    xtype: 'panel',
                    border:false,
                    height: 200,
                    layout: 'border',
                    items: [
                        {
                            region: "north",
                            xtype: 'form',
                            layout: 'form',
                            height: 140,
                            border: false,
                            items: [
                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            columnWidth: .5,
                                            xtype: 'combobox',
                                            maxLength: 6,
                                            name: 'providerCode',
                                            editable: false,
                                            forceSelection: true,
                                            labelAlign: 'right',
                                            fieldLabel: '供应商',
                                            store: providerCode_store,
                                            queryMode: 'local',
                                            displayField: 'providerName',
                                            valueField: 'providerCode',
                                            allowBlank: false,
                                            height: 20,
                                            width: 299,
                                            emptyText: '请选择'
                                        },
                                        {
                                            columnWidth: .5,
                                            xtype: 'combobox',
                                            name: 'userId',
                                            editable: false,
                                            forceSelection: true,
                                            labelAlign: 'right',
                                            fieldLabel: '入库用户',
                                            store: userId_store,
                                            queryMode: 'local',
                                            displayField: 'realName',
                                            valueField: 'userId',
                                            allowBlank: false,
                                            height: 20,
                                            width: 299,
                                            emptyText: '请选择'
                                        }

                                    ]
                                }

                                ,
                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaultType: 'textfield',
                                    labelAlign: 'right',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            columnWidth: .5,
                                            name: 'inType',
                                            fieldLabel: '入库方式'
                                        },

                                        {
                                            columnWidth: .5,
                                            name: 'inTime',
                                            fieldLabel: '入库时间'
                                        }
                                    ]
                                }
                                ,

                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaultType: 'textfield',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            columnWidth: .5,
                                            maxLength: 20,
                                            name: 'handlerName',
                                            maxLengthText: '经手人不能多于20个字符',
                                            fieldLabel: '经手人'
                                        },

                                        {
                                            columnWidth: .5,
                                            name: 'totalMoney',
                                            fieldLabel: '入库金额'
                                        }
                                    ]
                                }
                                ,

                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items:[
                                        {
                                            columnWidth: 1,
                                            xtype:'textfield',
                                            allowBlank: false,
                                            margin: '5 5 5 5',
                                            labelAlign: 'right',
                                            maxLength: 150,
                                            name: 'memo',
                                            maxLengthText: '备注不能多于150个字符',
                                            fieldLabel: '备注'
                                        }

                                    ]
                                }
                            ]

                        }
                        ,
                        {
                            region: "center",
                            xtype: 'panel',
                            layout: 'column',
                            title: '明细信息编辑',
                            defaults: {
                                allowBlank: false,
                                margin: '5 5 5 5',
                                labelAlign: 'right'
                            },
                            items: [
                                {
                                    columnWidth: 1 / 4,
                                    xtype: 'combobox',
                                    name: 'productCode',
                                    editable: false,
                                    forceSelection: true,
                                    labelAlign: 'right',
                                    fieldLabel: '商品',
                                    labelWidth:30,
                                    store: productCode_store,
                                    queryMode: 'local',
                                    displayField: 'productName',
                                    valueField: 'productCode',
                                    allowBlank: false,
                                    height: 20,
                                    width: 299,
                                    emptyText: '请选择'
                                }
                                ,
                                {
                                    xtype: 'textfield',
                                    columnWidth: 1 / 4,
                                    name: 'num',
                                    height: 20,
                                    width: 299,
                                    fieldLabel: '数量'
                                },

                                {
                                    xtype: 'textfield',
                                    columnWidth: 1 / 4,
                                    name: 'price',
                                    height: 20,
                                    width: 299,
                                    fieldLabel: '进价'
                                }
                                ,
                                {
                                    xtype:'button',
                                    text:'新增'
                                }
                                ,
                                {
                                    xtype:'button',
                                    text:'重输'
                                }
                            ]

                        }
                    ]
                }
                ,
                {

                    region: 'center',
                    xtype: 'gridpanel',
                    id: 'in_stock_add_detail_gridpanel',
                    width: 310,
                    columnLines: true,
                    store: Ext.create('app.store.InStockDetail', {autoLoad: false}),
                    title: '入库明细信息',
                    columns: [
                        {
                            text: '商品',
                            dataIndex: 'productName'
                        },
                        {
                            text: '数量',
                            dataIndex: 'num'
                        },
                        {
                            text: '进价',
                            dataIndex: 'price'
                        },
                        {
                            xtype: 'actioncolumn',
                            width: 50,
                            items: [{
                                icon: GLOBAL_ROOT_PATH + '/static/css/img/edit.png',
                                tooltip: '编辑',
                                handler: function (grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    alert("Edit " + rec.get('firstname'));
                                }
                            }, {
                                icon: GLOBAL_ROOT_PATH + '/static/css/img/delete.png',
                                tooltip: '删除',
                                handler: function (grid, rowIndex, colIndex) {
                                    var rec = grid.getStore().getAt(rowIndex);
                                    alert("Terminate " + rec.get('firstname'));
                                }
                            }]
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