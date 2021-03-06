/**
 * <p>
 * 商品类别信息表 主列表view
 * </p>
 *
 * @author 代码生成器
 * @class app.view.producttype.ProductType_List
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.producttype.ProductType_List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProductType_List',
    store: 'ProductType',
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
                    xtype: 'gridpanel',
                    region: 'center',
                    selType: 'rowmodel',
                    store: 'ProductType',
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
                            text: '商品类别编码',
                            dataIndex: 'typeCode'


                        },
                        {
                            text: '商品类别名称',
                            dataIndex: 'typeName'


                        },
                        {
                            text: '排序编码',
                            dataIndex: 'sortId'


                        },
                        {
                            text: '状态',
                            dataIndex: 'status',
                            renderer: function (value) {
                                if ((value == 'false') || (value == false)) {
                                    return '未启用';
                                }
                                if ((value == 'true') || (true == value)) {
                                    return '启用';
                                }
                            }
                        }
                    ],
                    dockedItems: [{
                        xtype: 'pagingtoolbar',
                        store: 'ProductType',
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