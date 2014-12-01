/**
 * <p>
 * 会员充值信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.MemberSupplyRecord
 * @extends Ext.data.Store
 */
 Ext.define('app.store.MemberSupplyRecord', {
	extend : 'Ext.data.Store',
	alias : 'store.MemberSupplyRecord',
	requires : ['app.model.MemberSupplyRecord'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.MemberSupplyRecord',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/membersupplyrecord/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/membersupplyrecord/listbypage",
				create: GLOBAL_ROOT_PATH+"/membersupplyrecord/add",
				update: GLOBAL_ROOT_PATH+"/membersupplyrecord/edit",
				destroy: GLOBAL_ROOT_PATH+"/membersupplyrecord/del"
			},			
			reader: {
				type: "json",
				root: 'listData',
				totalProperty: 'totalRecordCount'
			}
			}
		}, cfg) ]);
	}
});