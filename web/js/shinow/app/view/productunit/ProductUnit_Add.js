/**
 * <p>
 * 商品单位字典 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.productunit.ProductUnit_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.productunit.ProductUnit_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.ProductUnit_Add',
	layout:'border',
	width:400,
	height:175,
	plain: true,
	border : false,
	frame :false,
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
					maxLength:20,
					name:'name',
					maxLengthText:'名称不能多于20个字符',
					fieldLabel:'名称'
				},

				{
					name:'status',
					fieldLabel:'状态'
				},

				{
					maxLength:50,
					name:'memo',
					maxLengthText:'备注不能多于50个字符',
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