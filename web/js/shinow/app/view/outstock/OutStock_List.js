/**
 * <p>
 * 出库信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.outstock.OutStock_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.outstock.OutStock_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.OutStock_List',
	store : 'OutStock',
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
					store : 'OutStock',
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
							text: '出库单号',
							dataIndex:'outStockId'
							
							
						},
						{
							text: '系统用户id',
							dataIndex:'userId'
							
							
						},
						{
							text: '出库时间',
							dataIndex:'outTime',
							
							renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')
						},
						{
							text: '经手人',
							dataIndex:'handlerName'
							
							
						},
						{
							text: '出库方式',
							dataIndex:'outType'
							
							
						},
						{
							text: '出库金额',
							dataIndex:'totalMoney'
							
							
						},
						{
							text: '备注',
							dataIndex:'remark'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'OutStock',
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