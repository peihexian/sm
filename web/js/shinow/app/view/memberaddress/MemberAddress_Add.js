/**
 * <p>
 * 会员收货地址信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.memberaddress.MemberAddress_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.memberaddress.MemberAddress_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.MemberAddress_Add',
	layout:'border',
	width:400,
	height:250,
	plain: true,
	border : false,
	frame :false,
	buttonAlign:'center',	
	initComponent: function() {
		var userName_store = Ext.create('app.store.WebUser',{
			pageSize : 1000,
			autoLoad:true
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
					name:'recvMan',
					maxLengthText:'收货人姓名不能多于20个字符',
					fieldLabel:'收货人姓名'
				},

				{
					maxLength:20,
					name:'tel',
					maxLengthText:'电话不能多于20个字符',
					fieldLabel:'电话'
				},

				{
					maxLength:150,
					name:'recvAddress',
					maxLengthText:'货物的配送地址不能多于150个字符',
					fieldLabel:'货物的配送地址'
				},

				{
					maxLength:6,
					name:'postCode',
					maxLengthText:'邮编不能多于6个字符',
					fieldLabel:'邮编'
				},

				{
					name:'defaultAddr',
					fieldLabel:'是否默认'
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