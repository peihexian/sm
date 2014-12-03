/**
 * <p>
 * 入库信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.InStock
 * @extends Ext.data.Store
 */
 Ext.define('app.store.StockChartPieStore', {
	extend : 'Ext.data.Store',
	alias : 'store.stockChartPieStore',
	requires : ['app.model.StockChartDataModel'],
	autoLoad : true,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.StockChartDataModel',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/stock_chart',
				actionMethods : {
					read : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/stock_chart"
			},
			reader: {
				type: "json",
				root: 'chart_data'
			}
			}
		}, cfg) ]);
	}
});