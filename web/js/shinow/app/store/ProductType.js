/**
 * <p>
 * 商品类别信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.ProductType
 * @extends Ext.data.Store
 */
 Ext.define('app.store.ProductType', {
	extend : 'Ext.data.Store',
	alias : 'store.ProductType',
	requires : ['app.model.ProductType'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.ProductType',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/producttype/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/producttype/listbypage",
				create: GLOBAL_ROOT_PATH+"/producttype/add",
				update: GLOBAL_ROOT_PATH+"/producttype/edit",
				destroy: GLOBAL_ROOT_PATH+"/producttype/del"
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