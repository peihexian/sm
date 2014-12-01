/**
 * <p>
 * 入库明细信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.InStockDetail
 * @extends Ext.data.Store
 */
 Ext.define('app.store.InStockDetail', {
	extend : 'Ext.data.Store',
	alias : 'store.InStockDetail',
	requires : ['app.model.InStockDetail'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.InStockDetail',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/instockdetail/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/instockdetail/listbypage",
				create: GLOBAL_ROOT_PATH+"/instockdetail/add",
				update: GLOBAL_ROOT_PATH+"/instockdetail/edit",
				destroy: GLOBAL_ROOT_PATH+"/instockdetail/del"
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