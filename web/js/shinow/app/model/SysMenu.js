/**
 * <p>
 * 系统菜单信息表
 * </p>
 * 
 * @author 代码生成器
 * @class app.model.SysMenu
 * @extends Ext.data.Model
 */
Ext.define('app.model.SysMenu', {
		extend : 'Ext.data.Model',
		alias : 'model.SysMenu',
		fields : [
				{
					name : 'menuCode',
					type: 'string'
				},
				{
					name : 'menuName',
					type: 'string'
				},
				{
					name : 'menuUrl',
					type: 'string'
				},
				{
					name : 'sortId',
					type: 'int'
				},
				{
					name : 'status',
					type: 'string'
				},
				{
					name : 'parentMenuCode',
					type: 'string'
				},
				{
					name : 'iconUrl',
					type: 'string'
				},
				{
					name : 'permission',
					type: 'string'
				},
				{
					name : 'controllerFullClassname',
					type: 'string'
				},
				{
					name : 'controllerShortName',
					type: 'string'
				},
				{
					name : 'defaultViewClassname',
					type: 'string'
				}
		]
});