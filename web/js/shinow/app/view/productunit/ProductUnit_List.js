/**
 * <p>
 * 商品单位字典 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.productunit.ProductUnit_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.productunit.ProductUnit_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.ProductUnit_List',
	store : 'ProductUnit',
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
					store : 'ProductUnit',
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
							text: '商品单位分类id',
							dataIndex:'unitId'
							
							
						},
						{
							text: '名称',
							dataIndex:'name'
							
							
						},
						{
							text: '状态',
							dataIndex:'status'
							
							
						},
						{
							text: '备注',
							dataIndex:'memo'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'ProductUnit',
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