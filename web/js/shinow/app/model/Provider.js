/**
 * <p>
 * 供应商信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.Provider
 * @extends Ext.data.Model
 */
Ext.define('app.model.Provider', {
		extend : 'Ext.data.Model',
		alias : 'model.Provider',
		fields : [
				{
					name : 'providerCode',
					type: 'string'
				},
				{
					name : 'providerName',
					type: 'string'
				},
				{
					name : 'providerNameAb',
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