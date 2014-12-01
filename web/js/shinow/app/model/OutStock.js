/**
 * <p>
 * 出库信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.OutStock
 * @extends Ext.data.Model
 */
Ext.define('app.model.OutStock', {
		extend : 'Ext.data.Model',
		alias : 'model.OutStock',
		idProperty:'outStockId',
		fields : [
				{
					name : 'outStockId',
					type: 'int'
				},
				{
					name : 'userId',
					type: 'int'
				},
				{
					name : 'outTime',
					type: 'date'
				},
				{
					name : 'handlerName',
					type: 'string'
				},
				{
					name : 'outType',
					type: 'int'
				},
				{
					name : 'totalMoney',
					type: 'string'
				},
				{
					name : 'remark',
					type: 'string'
				}
		]
});