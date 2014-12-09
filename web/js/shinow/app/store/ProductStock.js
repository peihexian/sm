/**
 * <p>
 * 商品库存信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.ProductStock
 * @extends Ext.data.Store
 */
 Ext.define('app.store.ProductStock', {
	extend : 'Ext.data.Store',
	alias : 'store.ProductStock',
	requires : ['app.model.ProductStock'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.ProductStock',
			pageSize : 19,
			extraParams: {
				'productCode':null
			},
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/productstock/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/productstock/listbypage",
				create: GLOBAL_ROOT_PATH+"/productstock/add",
				update: GLOBAL_ROOT_PATH+"/productstock/edit",
				destroy: GLOBAL_ROOT_PATH+"/productstock/del"
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