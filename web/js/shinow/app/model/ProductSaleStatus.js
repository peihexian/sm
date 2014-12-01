/**
 * <p>
 * 商品促销状态字典
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.ProductSaleStatus
 * @extends Ext.data.Model
 */
Ext.define('app.model.ProductSaleStatus', {
		extend : 'Ext.data.Model',
		alias : 'model.ProductSaleStatus',
		idProperty:'statusId',
		fields : [
				{
					name : 'statusId',
					type: 'int'
				},
				{
					name : 'statusName',
					type: 'string'
				},
				{
					name : 'status',
					type: 'string'
				},
				{
					name : 'memo',
					type: 'string'
				}
		]
});