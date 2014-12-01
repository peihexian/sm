/**
 * <p>
 * 会员信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.webuser.WebUser_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.webuser.WebUser_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.WebUser_List',
	store : 'WebUser',
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
					store : 'WebUser',
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
							text: '登录用户名',
							dataIndex:'userName'
							
							
						},
						{
							text: '密码',
							dataIndex:'userPass'
							
							
						},
						{
							text: 'Email',
							dataIndex:'email'
							
							
						},
						{
							text: '姓名',
							dataIndex:'realName'
							
							
						},
						{
							text: '余额',
							dataIndex:'balance'
							
							
						},
						{
							text: '状态',
							dataIndex:'status'
							
							
						},
						{
							text: '注册日期',
							dataIndex:'regDate',
							
							renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')
						},
						{
							text: '激活日期',
							dataIndex:'activeDate',
							
							renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')
						},
						{
							text: '备注',
							dataIndex:'remark'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'WebUser',
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