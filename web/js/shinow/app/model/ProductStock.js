/**
 * <p>
 * 商品库存信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.ProductStock
 * @extends Ext.data.Model
 */
Ext.define('app.model.ProductStock', {
		extend : 'Ext.data.Model',
		alias : 'model.ProductStock',
		fields : [
				{
					name : 'productCode',
					type: 'string'
				},
				{
					name : 'avgPrice',
					type: 'string'
				},
				{
					name : 'num',
					type: 'int'
				},
			{
				name:'product.productName'
			}

		]
});