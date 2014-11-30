/**
 * <p>
 * 系统用户信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.SysUser
 * @extends Ext.data.Model
 */
Ext.define('app.model.SysUser', {
		extend : 'Ext.data.Model',
		alias : 'model.SysUser',
		idProperty:'userId',
		fields : [
				{
					name : 'userId',
					type: 'int'
				},
				{
					name : 'realName',
					type: 'string'
				},
				{
					name : 'loginName',
					type: 'string'
				},
				{
					name : 'loginPass',
					type: 'string'
				},
				{
					name : 'address',
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
					name : 'mobile',
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