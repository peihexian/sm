/**
 * <p>
 * 商品单位字典 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.ProductUnit
 * @extends Ext.data.Store
 */
 Ext.define('app.store.ProductUnit', {
	extend : 'Ext.data.Store',
	alias : 'store.ProductUnit',
	requires : ['app.model.ProductUnit'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.ProductUnit',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/productunit/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/productunit/listbypage",
				create: GLOBAL_ROOT_PATH+"/productunit/add",
				update: GLOBAL_ROOT_PATH+"/productunit/edit",
				destroy: GLOBAL_ROOT_PATH+"/productunit/del"
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