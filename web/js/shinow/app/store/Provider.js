/**
 * <p>
 * 供应商信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.Provider
 * @extends Ext.data.Store
 */
 Ext.define('app.store.Provider', {
	extend : 'Ext.data.Store',
	alias : 'store.Provider',
	requires : ['app.model.Provider'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.Provider',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/provider/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/provider/listbypage",
				create: GLOBAL_ROOT_PATH+"/provider/add",
				update: GLOBAL_ROOT_PATH+"/provider/edit",
				destroy: GLOBAL_ROOT_PATH+"/provider/del"
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