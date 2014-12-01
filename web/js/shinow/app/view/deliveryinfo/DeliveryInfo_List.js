/**
 * <p>
 * 配送商信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.deliveryinfo.DeliveryInfo_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.deliveryinfo.DeliveryInfo_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.DeliveryInfo_List',
	store : 'DeliveryInfo',
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
					store : 'DeliveryInfo',
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
							text: '配送商编码',
							dataIndex:'deliveryCode'
							
							
						},
						{
							text: '配送商名称',
							dataIndex:'deliveryName'
							
							
						},
						{
							text: '地址',
							dataIndex:'address'
							
							
						},
						{
							text: '联系人',
							dataIndex:'linkName'
							
							
						},
						{
							text: '联系电话',
							dataIndex:'linkTel'
							
							
						},
						{
							text: 'QQ',
							dataIndex:'qq'
							
							
						},
						{
							text: 'Email',
							dataIndex:'email'
							
							
						},
						{
							text: '排序编码',
							dataIndex:'sortId'
							
							
						},
						{
							text: '状态',
							dataIndex:'status'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'DeliveryInfo',
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