/**
 * <p>
 * 会员信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.WebUser
 * @extends Ext.data.Store
 */
 Ext.define('app.store.WebUser', {
	extend : 'Ext.data.Store',
	alias : 'store.WebUser',
	requires : ['app.model.WebUser'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.WebUser',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/webuser/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/webuser/listbypage",
				create: GLOBAL_ROOT_PATH+"/webuser/add",
				update: GLOBAL_ROOT_PATH+"/webuser/edit",
				destroy: GLOBAL_ROOT_PATH+"/webuser/del"
			},			
			reader: {
				type: "json",
				root: 'listData',
				totalProperty: 'totalRecordCount'
			}
			}
		}, cfg) ]);
	}
});