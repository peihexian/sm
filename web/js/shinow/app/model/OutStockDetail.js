/**
 * <p>
 * 出库明细信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.OutStockDetail
 * @extends Ext.data.Model
 */
Ext.define('app.model.OutStockDetail', {
		extend : 'Ext.data.Model',
		alias : 'model.OutStockDetail',
		idProperty:'outStockDetailId',
		fields : [
				{
					name : 'outStockDetailId',
					type: 'int'
				},
				{
					name : 'productCode',
					type: 'string'
				},
				{
					name : 'outStockId',
					type: 'int'
				},
				{
					name : 'num',
					type: 'int'
				},
				{
					name : 'sellPrice',
					type: 'string'
				},
				{
					name : 'stockPrice',
					type: 'string'
				}
		]
});