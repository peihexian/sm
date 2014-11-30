/**
 * <p>
 * 系统用户对应角色表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.sysuserrole.SysUserRole_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.sysuserrole.SysUserRole_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.SysUserRole_List',
	store : 'SysUserRole',
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
					store : 'SysUserRole',
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
							text: '系统用户id',
							dataIndex:'userId'
							
							
						},
						{
							text: '角色编码',
							dataIndex:'roleCode'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'SysUserRole',
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