/**
 * <p>
 * 角色信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.sysrole.SysRole_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.sysrole.SysRole_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.SysRole_List',
	store : 'SysRole',
	treeData:{menudata:{children:[]},text:'权限列表'},
	layout: {
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		Ext.Ajax.request({
			url:GLOBAL_ROOT_PATH+'/sysrole/menutree?rolecode=000',
			async: false,
			success:function(response){
				me.treeData = response.responseText;
				if (typeof(me.treeData) === 'string'){
					me.treeData = Ext.JSON.decode(me.treeData);
				}
			}
		});
		var store = Ext.create("Ext.data.TreeStore",{
			fields:[
				{ name: 'id', type:'string',mapping: 'data.menuCode'},
				{ name: 'text', type: 'string', mapping: 'data.menuName'}
			]
			,
			root: {
				text: '角色对应权限',
				id: '-1',
				children: me.treeData.menudata.children
			}
		});

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
					xtype: 'treepanel',
					region: 'east',
					width:300,
					collapsible: false,
					title : "角色对应权限",
					store: store
				},
				{
					xtype: 'gridpanel',
					region: 'center',
					selType: 'rowmodel',
					store : 'SysRole',
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
							text: '角色编码',
							dataIndex:'roleCode'
							
							
						},
						{
							text: '角色名称',
							dataIndex:'roleName'
							
							
						},
						{
							text: '排序编码',
							dataIndex:'sortId'
							
							
						},
						{
							text: '状态',
							dataIndex:'status',
							renderer:function(value){
								if ((value=='false') || (value==false)){
									return '未启用';
								}
								if ((value=='true') || (true==value)) {
									return '启用';
								}
							}
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'SysRole',
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