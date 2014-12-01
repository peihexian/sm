/**
 * <p>
 * 商品库存信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.productstock.ProductStock_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.productstock.ProductStock_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.ProductStock_Edit',
	layout:'border',
	width:400,
	height:150,
	plain: true,
	buttonAlign:'center',	
	initComponent: function() {
		var productCode_store = Ext.create('app.store.Product',{
			pageSize : 1000,
			autoLoad:false
		});
		var productCode_combobox = Ext.create('Ext.form.ComboBox',{
			name:'productCode',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'商品编码',
			store:productCode_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'productCode',
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
					name:'productCode',
					xtype:'hiddenfield'
				},

				{
					name:'avgPrice',
					fieldLabel:'加权平均价'
				},

				{
					name:'num',
					fieldLabel:'库存数量'
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