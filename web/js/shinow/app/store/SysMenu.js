/**
 * <p>
 * 系统菜单信息表 store
 * </p>
 * 
 * @author 代码生成器
 * @class app.store.SysMenu
 * @extends Ext.data.Store
 */
 Ext.define('app.store.SysMenu', {
	extend : 'Ext.data.Store',
	alias : 'store.SysMenu',
	requires : ['app.model.SysMenu'],
	autoLoad : false,
	autoSync : false,	
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			model : 'app.model.SysMenu',
			pageSize : 19,
			proxy : {
				type : 'ajax',
				url : GLOBAL_ROOT_PATH + '/sysmenu/listbypage',
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "POST"
				},
			api: {
				read: GLOBAL_ROOT_PATH+"/sysmenu/listbypage",
				create: GLOBAL_ROOT_PATH+"/sysmenu/add",
				update: GLOBAL_ROOT_PATH+"/sysmenu/edit",
				destroy: GLOBAL_ROOT_PATH+"/sysmenu/del"
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