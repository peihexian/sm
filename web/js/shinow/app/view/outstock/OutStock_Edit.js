/**
 * <p>
 * 出库信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.outstock.OutStock_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.outstock.OutStock_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.OutStock_Edit',
	layout:'border',
	width:400,
	height:250,
	plain: true,
	buttonAlign:'center',	
	initComponent: function() {
		var userId_store = Ext.create('app.store.SysUser',{
			pageSize : 1000,
			autoLoad:false
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
					name:'outStockId',
					xtype:'hiddenfield'
				},

				{
					name:'userId',
					fieldLabel:'系统用户id'
				},

				{
					name:'outTime',
					fieldLabel:'出库时间'
				},

				{
					maxLength:20,
					name:'handlerName',
					maxLengthText:'经手人不能多于20个字符',
					fieldLabel:'经手人'
				},

				{
					name:'outType',
					fieldLabel:'出库方式'
				},

				{
					name:'totalMoney',
					fieldLabel:'出库金额'
				},

				{
					maxLength:150,
					name:'remark',
					maxLengthText:'备注不能多于150个字符',
					fieldLabel:'备注'
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