/**
 * <p>
 * 商品类别信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.producttype.ProductType_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.producttype.ProductType_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.ProductType_Edit',
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
					name:'typeCode',
					xtype:'hiddenfield'
				},

				{
					maxLength:50,
					name:'typeName',
					maxLengthText:'商品类别名称不能多于50个字符',
					fieldLabel:'商品类别名称'
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