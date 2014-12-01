/**
 * <p>
 * 出库明细信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.outstockdetail.OutStockDetail_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.outstockdetail.OutStockDetail_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.OutStockDetail_Add',
	layout:'border',
	width:400,
	height:225,
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
		var outStockId_store = Ext.create('app.store.OutStock',{
			pageSize : 1000,
			autoLoad:true
		});
		var outStockId_combobox = Ext.create('Ext.form.ComboBox',{
			name:'outStockId',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'出库单号',
			store:outStockId_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'outStockId',
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
					name:'outStockId',
					fieldLabel:'出库单号'
				},

				{
					name:'num',
					fieldLabel:'数量'
				},

				{
					name:'sellPrice',
					fieldLabel:'售价'
				},

				{
					name:'stockPrice',
					fieldLabel:'出库时的成本单价'
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