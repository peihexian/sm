/**
 * <p>
 * 系统用户对应角色表 controller
 * </p>
 * 
 * @author 代码生成器
 * @class app.controller.SysUserRole
 * @extends Ext.app.Controller
 */
 Ext.define('app.controller.SysUserRole',{
		extend : 'Ext.app.Controller',
		alias : 'controller.SysUserRole',
		requires : [ 'app.model.SysUserRole', 'app.store.SysUserRole','app.view.sysuserrole.SysUserRole_List','app.view.sysuserrole.SysUserRole_Add','app.view.sysuserrole.SysUserRole_Edit' ],
		models: ['SysUserRole'],
		views : ['sysuserrole.SysUserRole_List','sysuserrole.SysUserRole_Add','sysuserrole.SysUserRole_Edit'],
		stores : ['SysUserRole'],
		refs : [
			{
				ref : 'sysuserrole_gridpanel',
				selector : 'SysUserRole_List>gridpanel'
			}
		],
		init : function(application) {
			var me = this;
			me.control({
				'SysUserRole_List>gridpanel':{
					render : this.loadDefaultListData
				},
				'SysUserRole_List>toolbar button[action=add]':{
					click : this.add
				},
				'SysUserRole_List>toolbar button[action=edit]' : {
					click : this.edit
				},
				'SysUserRole_List>toolbar button[action=del]':{
					click : this.del
				},
				'SysUserRole_Add  button[action=save]':{
					click:this.save_add
				},
				'SysUserRole_Edit  button[action=save]':{
					click:this.save_edit
				}
			});
		},
		loadDefaultListData : function(obj){
			var store = obj.getStore();
			store.loadPage(1);
		},
		add : function(btn){
			//用于新增数据的方法
			var window_id='SysUserRole_add_window';
			var desktop = this.app.getDesktop();
			//以下检测是否该窗口已经打开,如果已经打开则不再重新创建新窗口
			if (desktop.getWindow(window_id)){
				desktop.restoreWindow(desktop.getWindow(window_id));
				return;
			}

			var store = btn.up('panel').down('gridpanel').getStore();
			var new_record = Ext.create('app.model.SysUserRole',{
				//default data
			});

			var _view=Ext.widget('SysUserRole_Add');
			var add_window = desktop.createWindow({
				id: window_id,
				title:'新增系统用户对应角色表',
				layout:"fit",
				closable:true,
				closeAction:"destroy",
				items:[_view],
				iconCls: 'bogus',
				maximizable:false,
				animCollapse:false,
				constrainHeader:true
			});
			
			add_window.down('form').loadRecord(new_record);
			add_window.show();
		},
		//保存新增的数据
		save_add:function(btn){
			var me=this;
			var add_window=btn.up('window');
			var form = add_window.down('form').getForm();
			if (form.isValid()) {
				form.submit({
					url:GLOBAL_ROOT_PATH+"/sysuserrole/add",
					waitTitle : '提示',
					waitMsg : '正在提交数据,请稍候...',
					success: function(form, action) {
						if (true==action.result.success){
							Ext.Msg.alert('成功', action.result.msg);
							me.getSysuserrole_gridpanel().getStore().reload();
							add_window.close();
						}else{
							Ext.Msg.alert('错误', action.result.msg);
							form.markInvalid(action.result.errors);
						}
					},
					failure: function(form, action) {
						if (action.result){
							Ext.Msg.alert('错误', action.result.msg);
							form.markInvalid(action.result.errors);
						}else{
							Ext.Msg.alert('错误', '网络或者其他错误!');
						}
					}
				});
			}
		},
		//删除数据
		del : function(btn){
			var store = btn.up('panel').down('gridpanel').getStore();
			var grid = btn.up('panel').down('gridpanel');
			var sm = grid.getSelectionModel();
			var sel_count=sm.getCount();
			if (sel_count!=1){
				Ext.Msg.alert('错误', '请先选中要删除的记录!');
				return;
			}
			var rec = sm.getSelection()[0];
			Ext.MessageBox.confirm("提示","您确定要删除这些信息吗?",function(button,text){ 
				if (button=='yes'){
					Ext.Ajax.request({
						url: GLOBAL_ROOT_PATH+'/sysuserrole/del',
						params: {
							id: rec.get('id')
						},
						success: function(response){
							var text = response.responseText;
							var jsonObj=eval("("+text+")");
							if (true==jsonObj.success){
								Ext.Msg.alert('成功', jsonObj.msg);
								store.reload();
								if (store.getCount() > 0) {
									sm.select(0);
								}; 
							}else{
								Ext.Msg.alert('失败', jsonObj.msg);
							}
						}
					});
				}
			});
		},
		//打开编辑窗口并加载待编辑数据
		edit : function(btn){
			var window_id='SysUserRole_edit_window';
			var desktop = this.app.getDesktop();
			//以下检测是否该窗口已经打开,如果已经打开则不再重新创建新窗口
			if (desktop.getWindow(window_id)){
				desktop.restoreWindow(desktop.getWindow(window_id));
				return;
			}
			
			var store = btn.up('panel').down('gridpanel').getStore();
			var grid = btn.up('panel').down('gridpanel');
			var sm = grid.getSelectionModel();
			var sel_count=sm.getCount();
			if (sel_count!=1){
				Ext.Msg.alert('错误', '请先选中要编辑的记录!');
				return;
			}
			var edit_record = sm.getSelection()[0];
			
			var _view=Ext.widget('SysUserRole_Edit');
			var edit_window = desktop.createWindow({
				id: window_id,
				title:'编辑班级信息',
				layout:"fit",
				width:440,
				height:280,
				closable:true,
				closeAction:"destroy",
				items:[_view],
				iconCls: 'bogus',
				maximizable:false,
				animCollapse:false,
				constrainHeader:true
			});
			
			edit_window.down('form').loadRecord(edit_record);
			//加载下拉列表框值及赋予缺省值
			var userId_combobox=edit_window.down('textfield[name=userId]');
			userId_combobox.getStore().load(
				function(records, operation, success) {
					if (true==success){
						userId_combobox.setValue(edit_record.get('userId'));
					}
				}
			);
			var roleCode_combobox=edit_window.down('textfield[name=roleCode]');
			roleCode_combobox.getStore().load(
				function(records, operation, success) {
					if (true==success){
						roleCode_combobox.setValue(edit_record.get('roleCode'));
					}
				}
			);
			edit_window.show();
		},
		//保存修改结果的方法
		save_edit:function(btn){
			var me=this;
			var edit_window=btn.up('window');
			var form = edit_window.down('form').getForm();
			if (form.isValid()) {
				form.submit({
					url:GLOBAL_ROOT_PATH+"/sysuserrole/edit",
					waitTitle : '提示',
					waitMsg : '正在提交数据,请稍候...',
					success: function(form, action) {
						if (true==action.result.success){
							Ext.Msg.alert('成功', action.result.msg);
							me.getSysuserrole_gridpanel().getStore().reload();
							me.getSysuserrole_gridpanel().getSelectionModel().deselectAll();
							edit_window.close();
						}else{
							Ext.Msg.alert('错误', action.result.msg);
							form.markInvalid(action.result.errors);
						}
					},
					failure: function(form, action) {
						if (action.result){
							Ext.Msg.alert('错误', action.result.msg);
							form.markInvalid(action.result.errors);
						}else{
							Ext.Msg.alert('错误', '网络或者其他错误!');
						}
					}
				});
			}
		}	
	}
);