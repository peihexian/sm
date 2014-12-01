/**
 * <p>
 * 配送商信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.DeliveryInfo
 * @extends Ext.data.Model
 */
Ext.define('app.model.DeliveryInfo', {
		extend : 'Ext.data.Model',
		alias : 'model.DeliveryInfo',
		fields : [
				{
					name : 'deliveryCode',
					type: 'string'
				},
				{
					name : 'deliveryName',
					type: 'string'
				},
				{
					name : 'address',
					type: 'string'
				},
				{
					name : 'linkName',
					type: 'string'
				},
				{
					name : 'linkTel',
					type: 'string'
				},
				{
					name : 'qq',
					type: 'string'
				},
				{
					name : 'email',
					type: 'string'
				},
				{
					name : 'sortId',
					type: 'int'
				},
				{
					name : 'status',
					type: 'string'
				}
		]
});