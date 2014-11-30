/**
 * <p>
 * 角色信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.SysRole
 * @extends Ext.data.Store
 */
 Ext.define('app.store.SysRole', {
	extend : 'Ext.data.Store',
	alias : 'store.SysRole',
	requires : ['app.model.SysRole'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.SysRole',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/sysrole/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/sysrole/listbypage",
				create: GLOBAL_ROOT_PATH+"/sysrole/add",
				update: GLOBAL_ROOT_PATH+"/sysrole/edit",
				destroy: GLOBAL_ROOT_PATH+"/sysrole/del"
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