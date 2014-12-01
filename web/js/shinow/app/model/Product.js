/**
 * <p>
 * 商品信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.Product
 * @extends Ext.data.Model
 */
Ext.define('app.model.Product', {
		extend : 'Ext.data.Model',
		alias : 'model.Product',
		fields : [
				{
					name : 'productCode',
					type: 'string'
				},
				{
					name : 'typeCode',
					type: 'string'
				},
				{
					name : 'unitId',
					type: 'int'
				},
				{
					name : 'statusId',
					type: 'int'
				},
				{
					name : 'productName',
					type: 'string'
				},
				{
					name : 'productNameAb',
					type: 'string'
				},
				{
					name : 'price',
					type: 'string'
				},
				{
					name : 'valid',
					type: 'string'
				},
				{
					name : 'spec',
					type: 'string'
				},
				{
					name : 'describeTxt',
					type: 'string'
				},
				{
					name : 'picPath',
					type: 'string'
				},
				{
					name : 'clickCount',
					type: 'int'
				},
				{
					name : 'memo',
					type: 'string'
				}
		]
});