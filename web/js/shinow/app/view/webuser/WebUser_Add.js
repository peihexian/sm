/**
 * <p>
 * 会员信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.webuser.WebUser_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.webuser.WebUser_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.WebUser_Add',
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
					maxLength:20,
					name:'userName',
					maxLengthText:'登录用户名不能多于20个字符',
					fieldLabel:'登录用户名'
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