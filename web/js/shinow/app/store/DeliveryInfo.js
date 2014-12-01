/**
 * <p>
 * 配送商信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.DeliveryInfo
 * @extends Ext.data.Store
 */
 Ext.define('app.store.DeliveryInfo', {
	extend : 'Ext.data.Store',
	alias : 'store.DeliveryInfo',
	requires : ['app.model.DeliveryInfo'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.DeliveryInfo',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/deliveryinfo/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/deliveryinfo/listbypage",
				create: GLOBAL_ROOT_PATH+"/deliveryinfo/add",
				update: GLOBAL_ROOT_PATH+"/deliveryinfo/edit",
				destroy: GLOBAL_ROOT_PATH+"/deliveryinfo/del"
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