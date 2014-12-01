/**
 * <p>
 * 会员收货地址信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.memberaddress.MemberAddress_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.memberaddress.MemberAddress_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.MemberAddress_List',
	store : 'MemberAddress',
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
					store : 'MemberAddress',
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
							text: '收货人姓名',
							dataIndex:'recvMan'
							
							
						},
						{
							text: '电话',
							dataIndex:'tel'
							
							
						},
						{
							text: '货物的配送地址',
							dataIndex:'recvAddress'
							
							
						},
						{
							text: '邮编',
							dataIndex:'postCode'
							
							
						},
						{
							text: '是否默认',
							dataIndex:'defaultAddr'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'MemberAddress',
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