/**
 * <p>
 * 系统用户信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.sysuser.SysUser_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.sysuser.SysUser_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.SysUser_Add',
	layout:'border',
	width:400,
	height:350,
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
					name:'realName',
					maxLengthText:'用户真实姓名不能多于20个字符',
					fieldLabel:'用户真实姓名'
				},

				{
					maxLength:40,
					name:'loginName',
					maxLengthText:'用户登录名称不能多于40个字符',
					fieldLabel:'用户登录名称'
				},

				{
					maxLength:40,
					name:'loginPass',
					maxLengthText:'用户密码不能多于40个字符',
					fieldLabel:'用户密码'
				},

				{
					maxLength:150,
					name:'address',
					maxLengthText:'地址不能多于150个字符',
					fieldLabel:'地址'
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
					maxLengthText:'qq号码不能多于50个字符',
					fieldLabel:'qq号码'
				},

				{
					maxLength:50,
					name:'email',
					maxLengthText:'email地址不能多于50个字符',
					fieldLabel:'email地址'
				},

				{
					maxLength:20,
					name:'mobile',
					maxLengthText:'手机号码不能多于20个字符',
					fieldLabel:'手机号码'
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