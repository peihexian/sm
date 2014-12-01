/**
 * <p>
 * 出库明细信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.OutStockDetail
 * @extends Ext.data.Store
 */
 Ext.define('app.store.OutStockDetail', {
	extend : 'Ext.data.Store',
	alias : 'store.OutStockDetail',
	requires : ['app.model.OutStockDetail'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.OutStockDetail',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/outstockdetail/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/outstockdetail/listbypage",
				create: GLOBAL_ROOT_PATH+"/outstockdetail/add",
				update: GLOBAL_ROOT_PATH+"/outstockdetail/edit",
				destroy: GLOBAL_ROOT_PATH+"/outstockdetail/del"
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