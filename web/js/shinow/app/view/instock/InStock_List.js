/**
 * <p>
 * 入库信息表 主列表view
 * </p>
 *
 * @author 代码生成器
 * @class app.view.instock.InStock_List
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.instock.InStock_List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.InStock_List',
    store: 'InStock',
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
                    xtype: 'gridpanel',
                    id:'in_stock_list_detail_gridpanel',
                    width: 310,
                    columnLines: true,
                    store:Ext.create('app.store.InStockDetail',{autoLoad:false}),
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
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    id:'in_stock_list_gridpanel_1',
                    region: 'center',
                    selType: 'rowmodel',
                    store: 'InStock',
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
                            text: '入库单号',
                            dataIndex: 'inStockId'
                        },
                        {
                            text: '供应商',
                            dataIndex: 'providerName'


                        },
                        {
                            text: '入库操作用户',
                            dataIndex: 'realName'


                        },
                        {
                            text: '入库方式',
                            dataIndex: 'inType',
                            renderer:function(value){
                                if ((value=='1') || (value==1)){
                                    return '正常入库';
                                }
                                if ((value=='2') || (true==2)) {
                                    return '报溢入库';
                                }
                                if ((value=='3') || (true==3)) {
                                    return '盘盈入库';
                                }
                            }

                        },
                        {
                            text: '入库时间',
                            dataIndex: 'inTime',
                            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s')
                        },
                        {
                            text: '经手人',
                            dataIndex: 'handlerName'
                        },
                        {
                            text: '入库金额',
                            dataIndex: 'totalMoney'
                        },
                        {
                            text: '备注',
                            dataIndex: 'memo'


                        }
                    ],
                    dockedItems: [{
                        xtype: 'pagingtoolbar',
                        store: 'InStock',
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