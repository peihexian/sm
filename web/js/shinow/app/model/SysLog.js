/**
 * <p>
 * 系统用户对应角色表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.SysUserRole
 * @extends Ext.data.Model
 */
Ext.define('app.model.SysUserRole', {
		extend : 'Ext.data.Model',
		alias : 'model.SysUserRole',
		fields : [
				{
					name : 'userId',
					type: 'int'
				},
				{
					name : 'roleCode',
					type: 'string'
				}
		]
});