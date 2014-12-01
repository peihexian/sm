/**
 * <p>
 * 入库信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.InStock
 * @extends Ext.data.Model
 */
Ext.define('app.model.InStock', {
		extend : 'Ext.data.Model',
		alias : 'model.InStock',
		idProperty:'inStockId',
		fields : [
				{
					name : 'inStockId',
					type: 'int'
				},
				{
					name : 'providerCode',
					type: 'string'
				},
				{
					name : 'userId',
					type: 'int'
				},
				{
					name : 'inType',
					type: 'int'
				},
				{
					name : 'inTime',
					type: 'date'
				},
				{
					name : 'handlerName',
					type: 'string'
				},
				{
					name : 'totalMoney',
					type: 'string'
				},
				{
					name : 'memo',
					type: 'string'
				}
		]
});