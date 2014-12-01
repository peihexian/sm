/**
 * <p>
 * 商品促销状态字典 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.ProductSaleStatus
 * @extends Ext.data.Store
 */
 Ext.define('app.store.ProductSaleStatus', {
	extend : 'Ext.data.Store',
	alias : 'store.ProductSaleStatus',
	requires : ['app.model.ProductSaleStatus'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.ProductSaleStatus',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/productsalestatus/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/productsalestatus/listbypage",
				create: GLOBAL_ROOT_PATH+"/productsalestatus/add",
				update: GLOBAL_ROOT_PATH+"/productsalestatus/edit",
				destroy: GLOBAL_ROOT_PATH+"/productsalestatus/del"
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