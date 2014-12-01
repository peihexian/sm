/**
 * <p>
 * 订单信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.OrderInfo
 * @extends Ext.data.Store
 */
 Ext.define('app.store.OrderInfo', {
	extend : 'Ext.data.Store',
	alias : 'store.OrderInfo',
	requires : ['app.model.OrderInfo'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.OrderInfo',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/orderinfo/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/orderinfo/listbypage",
				create: GLOBAL_ROOT_PATH+"/orderinfo/add",
				update: GLOBAL_ROOT_PATH+"/orderinfo/edit",
				destroy: GLOBAL_ROOT_PATH+"/orderinfo/del"
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