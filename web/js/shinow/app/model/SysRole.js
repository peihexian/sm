/**
 * <p>
 * 角色信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.SysRole
 * @extends Ext.data.Model
 */
Ext.define('app.model.SysRole', {
		extend : 'Ext.data.Model',
		alias : 'model.SysRole',
		fields : [
				{
					name : 'roleCode',
					type: 'string'
				},
				{
					name : 'roleName',
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