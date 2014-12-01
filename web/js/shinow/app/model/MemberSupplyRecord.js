/**
 * <p>
 * 会员充值信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.MemberSupplyRecord
 * @extends Ext.data.Model
 */
Ext.define('app.model.MemberSupplyRecord', {
		extend : 'Ext.data.Model',
		alias : 'model.MemberSupplyRecord',
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
					name : 'payAccountId',
					type: 'string'
				},
				{
					name : 'payBank',
					type: 'string'
				},
				{
					name : 'recvAccountId',
					type: 'string'
				},
				{
					name : 'recvBank',
					type: 'string'
				},
				{
					name : 'remark',
					type: 'string'
				},
				{
					name : 'totalMoney',
					type: 'string'
				},
				{
					name : 'supplyTime',
					type: 'date'
				}
		]
});