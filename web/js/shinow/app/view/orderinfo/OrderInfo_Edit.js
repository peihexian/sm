/**
 * <p>
 * 订单信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.orderinfo.OrderInfo_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.orderinfo.OrderInfo_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.OrderInfo_Edit',
	layout:'border',
	width:400,
	height:425,
	plain: true,
	buttonAlign:'center',	
	initComponent: function() {
		var deliveryCode_store = Ext.create('app.store.DeliveryInfo',{
			pageSize : 1000,
			autoLoad:false
		});
		var deliveryCode_combobox = Ext.create('Ext.form.ComboBox',{
			name:'deliveryCode',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'配送商编码',
			store:deliveryCode_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'deliveryCode',
			allowBlank:false,
			emptyText : '请选择'
		});		
		var outStockId_store = Ext.create('app.store.OutStock',{
			pageSize : 1000,
			autoLoad:false
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
		var userName_store = Ext.create('app.store.WebUser',{
			pageSize : 1000,
			autoLoad:false
		});
		var userName_combobox = Ext.create('Ext.form.ComboBox',{
			name:'userName',
			editable: false,
			forceSelection: true,
			labelAlign:'right',
			fieldLabel:'登录用户名',
			store:userName_store,
			queryMode:'local',
			displayField:'studyTypeName',
			valueField:'userName',
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
					name:'billCode',
					xtype:'hiddenfield'
				},

				{
					maxLength:3,
					name:'deliveryCode',
					maxLengthText:'配送商编码不能多于3个字符',
					fieldLabel:'配送商编码'
				},

				{
					name:'outStockId',
					fieldLabel:'出库单号'
				},

				{
					maxLength:20,
					name:'userName',
					maxLengthText:'登录用户名不能多于20个字符',
					fieldLabel:'登录用户名'
				},

				{
					name:'userId',
					fieldLabel:'系统用户id'
				},

				{
					maxLength:20,
					name:'postBillCode',
					maxLengthText:'快递单号不能多于20个字符',
					fieldLabel:'快递单号'
				},

				{
					name:'billStatus',
					fieldLabel:'订单状态'
				},

				{
					name:'orderTime',
					fieldLabel:'订购时间'
				},

				{
					maxLength:20,
					name:'recvName',
					maxLengthText:'收货人姓名不能多于20个字符',
					fieldLabel:'收货人姓名'
				},

				{
					maxLength:20,
					name:'linkTel',
					maxLengthText:'联系电话不能多于20个字符',
					fieldLabel:'联系电话'
				},

				{
					maxLength:150,
					name:'recvAddress',
					maxLengthText:'配送地址不能多于150个字符',
					fieldLabel:'配送地址'
				},

				{
					maxLength:6,
					name:'postCode',
					maxLengthText:'邮编不能多于6个字符',
					fieldLabel:'邮编'
				},

				{
					name:'totalMoney',
					fieldLabel:'金额'
				},

				{
					maxLength:50,
					name:'remark',
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