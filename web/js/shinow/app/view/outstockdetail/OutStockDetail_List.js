/**
 * <p>
 * 出库明细信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.outstockdetail.OutStockDetail_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.outstockdetail.OutStockDetail_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.OutStockDetail_List',
	store : 'OutStockDetail',
	layout: {
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			tbar : [{
				text : '新增',
				action : 'add',
				iconCls : 'add-btn-icon'
			},'-',{
				text : '修改',
				action : 'edit',
				iconCls : 'edit-btn-icon'
			} ,'-',{
				text : '删除',
				action : 'del',
				iconCls : 'del-btn-icon'
			}],
			items: [
				{
					xtype: 'gridpanel',
					region: 'center',
					selType: 'rowmodel',
					store : 'OutStockDetail',
					columnLines : true,
					forceFit : true,
					width: '100%',
					height:'100%',
					defaults: {
						flex: 1,
						align:'center'
					},					
					columns: [
						{
							text: '出库明细id',
							dataIndex:'outStockDetailId'
							
							
						},
						{
							text: '商品编码',
							dataIndex:'productCode'
							
							
						},
						{
							text: '出库单号',
							dataIndex:'outStockId'
							
							
						},
						{
							text: '数量',
							dataIndex:'num'
							
							
						},
						{
							text: '售价',
							dataIndex:'sellPrice'
							
							
						},
						{
							text: '出库时的成本单价',
							dataIndex:'stockPrice'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'OutStockDetail',
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