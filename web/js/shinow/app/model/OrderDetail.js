/**
 * <p>
 * 订单明细信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.OrderDetail
 * @extends Ext.data.Model
 */
Ext.define('app.model.OrderDetail', {
		extend : 'Ext.data.Model',
		alias : 'model.OrderDetail',
		idProperty:'id',
		fields : [
				{
					name : 'id',
					type: 'int'
				},
				{
					name : 'productCode',
					type: 'string'
				},
				{
					name : 'billCode',
					type: 'int'
				},
				{
					name : 'num',
					type: 'int'
				},
				{
					name : 'price',
					type: 'string'
				}
		]
});