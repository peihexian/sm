/**
 * <p>
 * 商品信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.Product
 * @extends Ext.data.Store
 */
 Ext.define('app.store.Product', {
	extend : 'Ext.data.Store',
	alias : 'store.Product',
	requires : ['app.model.Product'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.Product',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/product/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/product/listbypage",
				create: GLOBAL_ROOT_PATH+"/product/add",
				update: GLOBAL_ROOT_PATH+"/product/edit",
				destroy: GLOBAL_ROOT_PATH+"/product/del"
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