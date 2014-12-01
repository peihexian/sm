/**
 * <p>
 * 供应商信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.provider.Provider_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.provider.Provider_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.Provider_Edit',
	layout:'border',
	width:400,
	height:325,
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
					name:'providerCode',
					xtype:'hiddenfield'
				},

				{
					maxLength:50,
					name:'providerName',
					maxLengthText:'供应商名称不能多于50个字符',
					fieldLabel:'供应商名称'
				},

				{
					maxLength:25,
					name:'providerNameAb',
					maxLengthText:'供应商助记码不能多于25个字符',
					fieldLabel:'供应商助记码'
				},

				{
					maxLength:200,
					name:'address',
					maxLengthText:'地址不能多于200个字符',
					fieldLabel:'地址'
				},

				{
					maxLength:20,
					name:'linkName',
					maxLengthText:'联系人不能多于20个字符',
					fieldLabel:'联系人'
				},

				{
					maxLength:50,
					name:'linkTel',
					maxLengthText:'联系电话不能多于50个字符',
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