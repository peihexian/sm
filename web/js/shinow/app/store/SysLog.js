/**
 * <p>
 * 系统用户对应角色表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.SysUserRole
 * @extends Ext.data.Store
 */
 Ext.define('app.store.SysUserRole', {
	extend : 'Ext.data.Store',
	alias : 'store.SysUserRole',
	requires : ['app.model.SysUserRole'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.SysUserRole',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/sysuserrole/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/sysuserrole/listbypage",
				create: GLOBAL_ROOT_PATH+"/sysuserrole/add",
				update: GLOBAL_ROOT_PATH+"/sysuserrole/edit",
				destroy: GLOBAL_ROOT_PATH+"/sysuserrole/del"
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