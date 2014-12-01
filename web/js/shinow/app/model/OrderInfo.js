/**
 * <p>
 * 订单信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.OrderInfo
 * @extends Ext.data.Model
 */
Ext.define('app.model.OrderInfo', {
		extend : 'Ext.data.Model',
		alias : 'model.OrderInfo',
		idProperty:'billCode',
		fields : [
				{
					name : 'billCode',
					type: 'int'
				},
				{
					name : 'deliveryCode',
					type: 'string'
				},
				{
					name : 'outStockId',
					type: 'int'
				},
				{
					name : 'userName',
					type: 'string'
				},
				{
					name : 'userId',
					type: 'int'
				},
				{
					name : 'postBillCode',
					type: 'string'
				},
				{
					name : 'billStatus',
					type: 'int'
				},
				{
					name : 'orderTime',
					type: 'date'
				},
				{
					name : 'recvName',
					type: 'string'
				},
				{
					name : 'linkTel',
					type: 'string'
				},
				{
					name : 'recvAddress',
					type: 'string'
				},
				{
					name : 'postCode',
					type: 'string'
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