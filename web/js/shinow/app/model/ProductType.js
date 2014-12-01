/**
 * <p>
 * 商品类别信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.ProductType
 * @extends Ext.data.Model
 */
Ext.define('app.model.ProductType', {
		extend : 'Ext.data.Model',
		alias : 'model.ProductType',
		fields : [
				{
					name : 'typeCode',
					type: 'string'
				},
				{
					name : 'typeName',
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