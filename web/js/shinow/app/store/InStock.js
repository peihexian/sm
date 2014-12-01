/**
 * <p>
 * 入库信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.InStock
 * @extends Ext.data.Store
 */
 Ext.define('app.store.InStock', {
	extend : 'Ext.data.Store',
	alias : 'store.InStock',
	requires : ['app.model.InStock'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.InStock',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/instock/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/instock/listbypage",
				create: GLOBAL_ROOT_PATH+"/instock/add",
				update: GLOBAL_ROOT_PATH+"/instock/edit",
				destroy: GLOBAL_ROOT_PATH+"/instock/del"
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