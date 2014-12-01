/**
 * <p>
 * 会员信息表 修改数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.webuser.WebUser_Edit
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.webuser.WebUser_Edit', {
	extend:'Ext.panel.Panel',
	alias : 'widget.WebUser_Edit',
	layout:'border',
	width:400,
	height:300,
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
					name:'userName',
					xtype:'hiddenfield'
				},

				{
					maxLength:20,
					name:'userPass',
					maxLengthText:'密码不能多于20个字符',
					fieldLabel:'密码'
				},

				{
					maxLength:50,
					name:'email',
					maxLengthText:'Email不能多于50个字符',
					fieldLabel:'Email'
				},

				{
					maxLength:20,
					name:'realName',
					maxLengthText:'姓名不能多于20个字符',
					fieldLabel:'姓名'
				},

				{
					name:'balance',
					fieldLabel:'余额'
				},

				{
					name:'status',
					fieldLabel:'状态'
				},

				{
					name:'regDate',
					fieldLabel:'注册日期'
				},

				{
					name:'activeDate',
					fieldLabel:'激活日期'
				},

				{
					maxLength:100,
					name:'remark',
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