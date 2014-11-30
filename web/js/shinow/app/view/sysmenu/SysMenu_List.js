/**
 * <p>
 * 系统菜单信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.sysmenu.SysMenu_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.sysmenu.SysMenu_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.SysMenu_List',
	store : 'SysMenu',
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
					store : 'SysMenu',
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
							text: '菜单编码',
							dataIndex:'menuCode'
							
							
						},
						{
							text: '菜单名称',
							dataIndex:'menuName'
							
							
						},
						{
							text: 'URL地址',
							dataIndex:'menuUrl'
							
							
						},
						{
							text: '排序编码',
							dataIndex:'sortId'
							
							
						},
						{
							text: '状态',
							dataIndex:'status'
							
							
						},
						{
							text: '上级菜单编码',
							dataIndex:'parentMenuCode'
							
							
						},
						{
							text: '图标url',
							dataIndex:'iconUrl'
							
							
						},
						{
							text: '权限标记名称',
							dataIndex:'permission'
							
							
						},
						{
							text: '菜单控制器完整类名',
							dataIndex:'controllerFullClassname'
							
							
						},
						{
							text: '菜单控制器别名',
							dataIndex:'controllerShortName'
							
							
						},
						{
							text: '缺省主视图完整类名',
							dataIndex:'defaultViewClassname'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'SysMenu',
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