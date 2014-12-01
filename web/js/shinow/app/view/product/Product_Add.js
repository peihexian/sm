/**
 * <p>
 * 商品信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.product.Product_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.product.Product_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.Product_Add',
	layout:'border',
	width:400,
	height:400,
	plain: true,
	border : false,
	frame :false,
	buttonAlign:'center',	
	initComponent: function() {
		var typeCode_store = Ext.create('app.store.ProductType',{
			pageSize : 1000,
			autoLoad:true
		});
		var typeCode_combobox = Ext.create('Ext.form.ComboBox',{
			name:'typeCode',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'商品类别编码',
			store:typeCode_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'typeCode',
			allowBlank:false,
			emptyText : '请选择'
		});
		var unitId_store = Ext.create('app.store.ProductUnit',{
			pageSize : 1000,
			autoLoad:true
		});
		var unitId_combobox = Ext.create('Ext.form.ComboBox',{
			name:'unitId',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'商品单位分类id',
			store:unitId_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'unitId',
			allowBlank:false,
			emptyText : '请选择'
		});
		var statusId_store = Ext.create('app.store.ProductSaleStatus',{
			pageSize : 1000,
			autoLoad:true
		});
		var statusId_combobox = Ext.create('Ext.form.ComboBox',{
			name:'statusId',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'促销状态编码',
			store:statusId_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'statusId',
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
					maxLength:10,
					name:'typeCode',
					maxLengthText:'商品类别编码不能多于10个字符',
					fieldLabel:'商品类别编码'
				},

				{
					name:'unitId',
					fieldLabel:'商品单位分类id'
				},

				{
					name:'statusId',
					fieldLabel:'促销状态编码'
				},

				{
					maxLength:50,
					name:'productName',
					maxLengthText:'商品名称不能多于50个字符',
					fieldLabel:'商品名称'
				},

				{
					maxLength:25,
					name:'productNameAb',
					maxLengthText:'商品助记码不能多于25个字符',
					fieldLabel:'商品助记码'
				},

				{
					name:'price',
					fieldLabel:'商品价格'
				},

				{
					name:'valid',
					fieldLabel:'可售状态'
				},

				{
					maxLength:200,
					name:'spec',
					maxLengthText:'规格不能多于200个字符',
					fieldLabel:'规格'
				},

				{
					maxLength:200,
					name:'describeTxt',
					maxLengthText:'描述不能多于200个字符',
					fieldLabel:'描述'
				},

				{
					maxLength:100,
					name:'picPath',
					maxLengthText:'图片不能多于100个字符',
					fieldLabel:'图片'
				},

				{
					name:'clickCount',
					fieldLabel:'点击数'
				},

				{
					maxLength:100,
					name:'memo',
					maxLengthText:'备注不能多于100个字符',
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