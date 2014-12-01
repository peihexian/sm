/**
 * <p>
 * 订单明细信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.orderdetail.OrderDetail_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.orderdetail.OrderDetail_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.OrderDetail_Add',
	layout:'border',
	width:400,
	height:200,
	plain: true,
	border : false,
	frame :false,
	buttonAlign:'center',	
	initComponent: function() {
		var productCode_store = Ext.create('app.store.Product',{
			pageSize : 1000,
			autoLoad:true
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
		var billCode_store = Ext.create('app.store.OrderInfo',{
			pageSize : 1000,
			autoLoad:true
		});
		var billCode_combobox = Ext.create('Ext.form.ComboBox',{
			name:'billCode',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'订单号',
			store:billCode_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'billCode',
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
					maxLength:20,
					name:'productCode',
					maxLengthText:'商品编码不能多于20个字符',
					fieldLabel:'商品编码'
				},

				{
					name:'billCode',
					fieldLabel:'订单号'
				},

				{
					name:'num',
					fieldLabel:'数量'
				},

				{
					name:'price',
					fieldLabel:'售价'
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