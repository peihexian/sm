/**
 * <p>
 * 会员收货地址信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.MemberAddress
 * @extends Ext.data.Store
 */
 Ext.define('app.store.MemberAddress', {
	extend : 'Ext.data.Store',
	alias : 'store.MemberAddress',
	requires : ['app.model.MemberAddress'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.MemberAddress',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/memberaddress/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/memberaddress/listbypage",
				create: GLOBAL_ROOT_PATH+"/memberaddress/add",
				update: GLOBAL_ROOT_PATH+"/memberaddress/edit",
				destroy: GLOBAL_ROOT_PATH+"/memberaddress/del"
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