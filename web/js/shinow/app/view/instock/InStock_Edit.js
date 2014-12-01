/**
 * <p>
 * 入库信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.instock.InStock_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.instock.InStock_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.InStock_Edit',
	layout:'border',
	width:400,
	height:275,
	plain: true,
	buttonAlign:'center',	
	initComponent: function() {
		var providerCode_store = Ext.create('app.store.Provider',{
			pageSize : 1000,
			autoLoad:false
		});
		var providerCode_combobox = Ext.create('Ext.form.ComboBox',{
			name:'providerCode',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'供应商编码',
			store:providerCode_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'providerCode',
			allowBlank:false,
			emptyText : '请选择'
		});		
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
					name:'inStockId',
					xtype:'hiddenfield'
				},

				{
					maxLength:6,
					name:'providerCode',
					maxLengthText:'供应商编码不能多于6个字符',
					fieldLabel:'供应商编码'
				},

				{
					name:'userId',
					fieldLabel:'系统用户id'
				},

				{
					name:'inType',
					fieldLabel:'入库方式'
				},

				{
					name:'inTime',
					fieldLabel:'入库时间'
				},

				{
					maxLength:20,
					name:'handlerName',
					maxLengthText:'经手人不能多于20个字符',
					fieldLabel:'经手人'
				},

				{
					name:'totalMoney',
					fieldLabel:'入库金额'
				},

				{
					maxLength:150,
					name:'memo',
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