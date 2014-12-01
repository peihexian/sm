/**
 * <p>
 * 订单明细信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.OrderDetail
 * @extends Ext.data.Store
 */
 Ext.define('app.store.OrderDetail', {
	extend : 'Ext.data.Store',
	alias : 'store.OrderDetail',
	requires : ['app.model.OrderDetail'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.OrderDetail',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/orderdetail/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/orderdetail/listbypage",
				create: GLOBAL_ROOT_PATH+"/orderdetail/add",
				update: GLOBAL_ROOT_PATH+"/orderdetail/edit",
				destroy: GLOBAL_ROOT_PATH+"/orderdetail/del"
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