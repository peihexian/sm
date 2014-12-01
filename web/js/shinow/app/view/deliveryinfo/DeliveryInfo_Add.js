/**
 * <p>
 * 配送商信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.deliveryinfo.DeliveryInfo_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.deliveryinfo.DeliveryInfo_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.DeliveryInfo_Add',
	layout:'border',
	width:400,
	height:300,
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
					maxLength:3,
					name:'deliveryCode',
					maxLengthText:'配送商编码不能多于3个字符',
					fieldLabel:'配送商编码'
				},

				{
					maxLength:50,
					name:'deliveryName',
					maxLengthText:'配送商名称不能多于50个字符',
					fieldLabel:'配送商名称'
				},

				{
					maxLength:150,
					name:'address',
					maxLengthText:'地址不能多于150个字符',
					fieldLabel:'地址'
				},

				{
					maxLength:20,
					name:'linkName',
					maxLengthText:'联系人不能多于20个字符',
					fieldLabel:'联系人'
				},

				{
					maxLength:20,
					name:'linkTel',
					maxLengthText:'联系电话不能多于20个字符',
					fieldLabel:'联系电话'
				},

				{
					maxLength:50,
					name:'qq',
					maxLengthText:'QQ不能多于50个字符',
					fieldLabel:'QQ'
				},

				{
					maxLength:50,
					name:'email',
					maxLengthText:'Email不能多于50个字符',
					fieldLabel:'Email'
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