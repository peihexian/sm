/**
 * <p>
 * 商品库存信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.productstock.ProductStock_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.productstock.ProductStock_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.ProductStock_List',
	store : 'ProductStock',
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
					store : 'ProductStock',
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
							text: '商品编码',
							dataIndex:'productCode'
							
							
						},
						{
							text: '加权平均价',
							dataIndex:'avgPrice'
							
							
						},
						{
							text: '库存数量',
							dataIndex:'num'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'ProductStock',
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