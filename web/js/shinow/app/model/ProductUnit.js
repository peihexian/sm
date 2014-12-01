/**
 * <p>
 * 商品单位字典
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.ProductUnit
 * @extends Ext.data.Model
 */
Ext.define('app.model.ProductUnit', {
		extend : 'Ext.data.Model',
		alias : 'model.ProductUnit',
		idProperty:'unitId',
		fields : [
				{
					name : 'unitId',
					type: 'int'
				},
				{
					name : 'name',
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