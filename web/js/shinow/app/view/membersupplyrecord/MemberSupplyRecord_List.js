/**
 * <p>
 * 会员充值信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.membersupplyrecord.MemberSupplyRecord_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.membersupplyrecord.MemberSupplyRecord_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.MemberSupplyRecord_List',
	store : 'MemberSupplyRecord',
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
					store : 'MemberSupplyRecord',
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
							text: '递增的流水号',
							dataIndex:'id'
							
							
						},
						{
							text: '登录用户名',
							dataIndex:'userName'
							
							
						},
						{
							text: '付款账号',
							dataIndex:'payAccountId'
							
							
						},
						{
							text: '付款开户行',
							dataIndex:'payBank'
							
							
						},
						{
							text: '收款账号',
							dataIndex:'recvAccountId'
							
							
						},
						{
							text: '收款开户行',
							dataIndex:'recvBank'
							
							
						},
						{
							text: '备注',
							dataIndex:'remark'
							
							
						},
						{
							text: '金额',
							dataIndex:'totalMoney'
							
							
						},
						{
							text: '充值时间',
							dataIndex:'supplyTime',
							
							renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'MemberSupplyRecord',
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