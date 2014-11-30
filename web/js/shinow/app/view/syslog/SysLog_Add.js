/**
 * <p>
 * 系统用户对应角色表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.sysuserrole.SysUserRole_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.sysuserrole.SysUserRole_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.SysUserRole_Add',
	layout:'border',
	width:400,
	height:125,
	plain: true,
	border : false,
	frame :false,
	buttonAlign:'center',	
	initComponent: function() {
		var userId_store = Ext.create('app.store.SysUser',{
			pageSize : 1000,
			autoLoad:true
		});
		var userId_combobox = Ext.create('Ext.form.ComboBox',{
			name:'userId',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'系统用户id',
			store:userId_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'userId',
			allowBlank:false,
			emptyText : '请选择'
		});
		var roleCode_store = Ext.create('app.store.SysRole',{
			pageSize : 1000,
			autoLoad:true
		});
		var roleCode_combobox = Ext.create('Ext.form.ComboBox',{
			name:'roleCode',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'角色编码',
			store:roleCode_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'roleCode',
			allowBlank:false,
			emptyText : '请选择'
		});
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
					name:'userId',
					fieldLabel:'系统用户id'
				},

				{
					maxLength:3,
					name:'roleCode',
					maxLengthText:'角色编码不能多于3个字符',
					fieldLabel:'角色编码'
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