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
	extend:'Ext.form.Panel',
	alias : 'widget.SysRole_Edit',
	layout:'border',
	width:400,
	height:125,
	border:false,
	buttonAlign:'center',
	initComponent: function() {
		var me=this;
		Ext.applyIf(me,{
			items:[
			{
				region: "center",
				xtype: 'form',
				defaultType:'textfield',
				labelAlign:'right',
				width:'auto',
				border:false,
				frame : false,
				buttonAlign:'center',
				defaults : {
					margin:'5 5 5 5',
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
						xtype: 'combobox',
						name:'status',
						fieldLabel: '状态',
						forceSelection: true,
						emptyText: "请选择",
						store: new Ext.data.SimpleStore({
							fields: ['key', 'value'],
							data: [
								['true', '启用'],
								['false', '未启用']
							]
						}),
						displayField: "value",
						valueField: "key",
						mode: "local"
					}
				]
			}]
			,
			buttons: [
			{
				text: '保存',
				action: 'save'
			},
			{
				text: '关闭',
				scope: this,
				handler: function(btn){btn.up('window').close();}
			}
		]
		});
		this.callParent(arguments);
	}
});