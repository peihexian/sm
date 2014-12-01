/**
 * <p>
 * 会员充值信息表 新增数据window
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.membersupplyrecord.MemberSupplyRecord_Add
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.membersupplyrecord.MemberSupplyRecord_Add', {
	extend:'Ext.panel.Panel',
	alias : 'widget.MemberSupplyRecord_Add',
	layout:'border',
	width:400,
	height:300,
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
					maxLength:19,
					name:'payAccountId',
					maxLengthText:'付款账号不能多于19个字符',
					fieldLabel:'付款账号'
				},

				{
					maxLength:50,
					name:'payBank',
					maxLengthText:'付款开户行不能多于50个字符',
					fieldLabel:'付款开户行'
				},

				{
					maxLength:19,
					name:'recvAccountId',
					maxLengthText:'收款账号不能多于19个字符',
					fieldLabel:'收款账号'
				},

				{
					maxLength:50,
					name:'recvBank',
					maxLengthText:'收款开户行不能多于50个字符',
					fieldLabel:'收款开户行'
				},

				{
					maxLength:50,
					name:'remark',
					maxLengthText:'备注不能多于50个字符',
					fieldLabel:'备注'
				},

				{
					name:'totalMoney',
					fieldLabel:'金额'
				},

				{
					name:'supplyTime',
					fieldLabel:'充值时间'
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