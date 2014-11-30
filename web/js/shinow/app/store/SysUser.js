/**
 * <p>
 * 系统用户信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.SysUser
 * @extends Ext.data.Store
 */
 Ext.define('app.store.SysUser', {
	extend : 'Ext.data.Store',
	alias : 'store.SysUser',
	requires : ['app.model.SysUser'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.SysUser',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/sysuser/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/sysuser/listbypage",
				create: GLOBAL_ROOT_PATH+"/sysuser/add",
				update: GLOBAL_ROOT_PATH+"/sysuser/edit",
				destroy: GLOBAL_ROOT_PATH+"/sysuser/del"
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