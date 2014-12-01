/**
 * <p>
 * 出库信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.OutStock
 * @extends Ext.data.Store
 */
 Ext.define('app.store.OutStock', {
	extend : 'Ext.data.Store',
	alias : 'store.OutStock',
	requires : ['app.model.OutStock'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.OutStock',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/outstock/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/outstock/listbypage",
				create: GLOBAL_ROOT_PATH+"/outstock/add",
				update: GLOBAL_ROOT_PATH+"/outstock/edit",
				destroy: GLOBAL_ROOT_PATH+"/outstock/del"
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