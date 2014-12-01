/**
 * <p>
 * 入库明细信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.instockdetail.InStockDetail_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.instockdetail.InStockDetail_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.InStockDetail_Add',
	layout:'border',
	width:400,
	height:200,
	plain: true,
	border : false,
	frame :false,
	buttonAlign:'center',	
	initComponent: function() {
		var inStockId_store = Ext.create('app.store.InStock',{
			pageSize : 1000,
			autoLoad:true
		});
		var inStockId_combobox = Ext.create('Ext.form.ComboBox',{
			name:'inStockId',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'入库单号',
			store:inStockId_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'inStockId',
			allowBlank:false,
			emptyText : '请选择'
		});
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
					fieldLabel:'入库单号'
				},

				{
					maxLength:20,
					name:'productCode',
					maxLengthText:'商品编码不能多于20个字符',
					fieldLabel:'商品编码'
				},

				{
					name:'num',
					fieldLabel:'入库数量'
				},

				{
					name:'price',
					fieldLabel:'进价'
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