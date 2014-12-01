/**
 * <p>
 * 会员信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.WebUser
 * @extends Ext.data.Model
 */
Ext.define('app.model.WebUser', {
		extend : 'Ext.data.Model',
		alias : 'model.WebUser',
		fields : [
				{
					name : 'userName',
					type: 'string'
				},
				{
					name : 'userPass',
					type: 'string'
				},
				{
					name : 'email',
					type: 'string'
				},
				{
					name : 'realName',
					type: 'string'
				},
				{
					name : 'balance',
					type: 'string'
				},
				{
					name : 'status',
					type: 'string'
				},
				{
					name : 'regDate',
					type: 'date'
				},
				{
					name : 'activeDate',
					type: 'date'
				},
				{
					name : 'remark',
					type: 'string'
				}
		]
});