/**
 * <p>
 * 角色信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.sysrole.SysRole_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.sysrole.SysRole_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.SysRole_Edit',
	layout:'border',
	width:400,
	height:175,
	plain: true,
	buttonAlign:'center',	
	initComponent: function() {
		this.items = [
		{
			xtype: 'form',
			defaultType:'textfield',
			labelAlign:'right',
			width:'auto',
			// height : 150,
			// width:390,
			frame : true,
			buttonAlign:'center',
			defaults : {
				allowBlank : false,
				autowidth : true,
				labelAlign:'right',
				height:20,
				width : 299
			},
			items: [

				{
					name:'roleCode',
					xtype:'hiddenfield'
				},

				{
					maxLength:20,
					name:'roleName',
					maxLengthText:'角色名称不能多于20个字符',
					fieldLabel:'角色名称'
				},

				{
					name:'sortId',
					fieldLabel:'排序编码'
				},

				{
					name:'status',
					fieldLabel:'状态'
				}	
			]
		}];
		this.buttons = [
			{
				text: '保存',
				action: 'save'
			},
			{
				text: '关闭',
				scope: this,
				handler: function(btn){btn.up('window').close();}
			}
		];
		this.callParent(arguments);
	}
});