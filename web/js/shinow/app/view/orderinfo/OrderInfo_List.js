/**
 * <p>
 * 订单信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.orderinfo.OrderInfo_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.orderinfo.OrderInfo_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.OrderInfo_List',
	store : 'OrderInfo',
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
					store : 'OrderInfo',
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
							text: '订单号',
							dataIndex:'billCode'
							
							
						},
						{
							text: '配送商编码',
							dataIndex:'deliveryCode'
							
							
						},
						{
							text: '出库单号',
							dataIndex:'outStockId'
							
							
						},
						{
							text: '登录用户名',
							dataIndex:'userName'
							
							
						},
						{
							text: '系统用户id',
							dataIndex:'userId'
							
							
						},
						{
							text: '快递单号',
							dataIndex:'postBillCode'
							
							
						},
						{
							text: '订单状态',
							dataIndex:'billStatus'
							
							
						},
						{
							text: '订购时间',
							dataIndex:'orderTime',
							
							renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')
						},
						{
							text: '收货人姓名',
							dataIndex:'recvName'
							
							
						},
						{
							text: '联系电话',
							dataIndex:'linkTel'
							
							
						},
						{
							text: '配送地址',
							dataIndex:'recvAddress'
							
							
						},
						{
							text: '邮编',
							dataIndex:'postCode'
							
							
						},
						{
							text: '金额',
							dataIndex:'totalMoney'
							
							
						},
						{
							text: '备注',
							dataIndex:'remark'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'OrderInfo',
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