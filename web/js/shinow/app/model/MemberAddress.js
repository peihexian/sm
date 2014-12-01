/**
 * <p>
 * 会员收货地址信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.MemberAddress
 * @extends Ext.data.Model
 */
Ext.define('app.model.MemberAddress', {
		extend : 'Ext.data.Model',
		alias : 'model.MemberAddress',
		idProperty:'id',
		fields : [
				{
					name : 'id',
					type: 'int'
				},
				{
					name : 'userName',
					type: 'string'
				},
				{
					name : 'recvMan',
					type: 'string'
				},
				{
					name : 'tel',
					type: 'string'
				},
				{
					name : 'recvAddress',
					type: 'string'
				},
				{
					name : 'postCode',
					type: 'string'
				},
				{
					name : 'defaultAddr',
					type: 'string'
				}
		]
});