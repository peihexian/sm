/**
 * <p>
 * 系统菜单信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.sysmenu.SysMenu_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.sysmenu.SysMenu_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.SysMenu_Edit',
	layout:'border',
	width:400,
	height:350,
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
					name:'menuCode',
					xtype:'hiddenfield'
				},

				{
					maxLength:50,
					name:'menuName',
					maxLengthText:'菜单名称不能多于50个字符',
					fieldLabel:'菜单名称'
				},

				{
					maxLength:100,
					name:'menuUrl',
					maxLengthText:'URL地址不能多于100个字符',
					fieldLabel:'URL地址'
				},

				{
					name:'sortId',
					fieldLabel:'排序编码'
				},

				{
					name:'status',
					fieldLabel:'状态'
				},

				{
					maxLength:6,
					name:'parentMenuCode',
					maxLengthText:'上级菜单编码不能多于6个字符',
					fieldLabel:'上级菜单编码'
				},

				{
					maxLength:100,
					name:'iconUrl',
					maxLengthText:'图标url不能多于100个字符',
					fieldLabel:'图标url'
				},

				{
					maxLength:50,
					name:'permission',
					maxLengthText:'权限标记名称不能多于50个字符',
					fieldLabel:'权限标记名称'
				},

				{
					maxLength:100,
					name:'controllerFullClassname',
					maxLengthText:'菜单控制器完整类名不能多于100个字符',
					fieldLabel:'菜单控制器完整类名'
				},

				{
					maxLength:100,
					name:'controllerShortName',
					maxLengthText:'菜单控制器别名不能多于100个字符',
					fieldLabel:'菜单控制器别名'
				},

				{
					maxLength:100,
					name:'defaultViewClassname',
					maxLengthText:'缺省主视图完整类名不能多于100个字符',
					fieldLabel:'缺省主视图完整类名'
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