/**
 * <p>
 * 供应商信息表 controller
 * </p>
 * 
 * @author 代码生成器
 * @class app.controller.Provider
 * @extends Ext.app.Controller
 */
 Ext.define('app.controller.Provider',{
		extend : 'Ext.app.Controller',
		alias : 'controller.Provider',
		requires : [ 'app.model.Provider', 'app.store.Provider','app.view.provider.Provider_List','app.view.provider.Provider_Add','app.view.provider.Provider_Edit' ],
		models: ['Provider'],
		views : ['provider.Provider_List','provider.Provider_Add','provider.Provider_Edit'],
		stores : ['Provider'],
		refs : [
			{
				ref : 'provider_gridpanel',
				selector : 'Provider_List>gridpanel'
			}
		],
		init : function(application) {
			var me = this;
			me.control({
				'Provider_List>gridpanel':{
					render : this.loadDefaultListData
				},
				'Provider_List>toolbar button[action=add]':{
					click : this.add
				},
				'Provider_List>toolbar button[action=edit]' : {
					click : this.edit
				},
				'Provider_List>toolbar button[action=del]':{
					click : this.del
				},
				'Provider_Add  button[action=save]':{
					click:this.save_add
				},
				'Provider_Edit  button[action=save]':{
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
			var window_id='Provider_add_window';
			
			//以下检测是否该窗口已经打开,如果已经打开则不再重新创建新窗口
			var add_window=Ext.getCmp(window_id);
			if (add_window){
				add_window.show();
				return ;
			}
			/*			
			var desktop = this.app.getDesktop();
			if (desktop.getWindow(window_id)){
				desktop.restoreWindow(desktop.getWindow(window_id));
				return;
			}
			*/

			var store = btn.up('panel').down('gridpanel').getStore();
			var new_record = Ext.create('app.model.Provider',{
				//default data
			});

			var _view=Ext.widget('Provider_Add');
			add_window=Ext.create('Ext.window.Window', {
				id: window_id,
				title:'新增供应商信息',
				layout:"fit",
				closable:true,
				modal:false,
				border: false,
				closeAction:"destroy",
				items:[_view],
				iconCls: 'bogus',
				maximizable:false,
				animCollapse:true,
				constrainHeader:true
			});
			
			/*			
			var add_window = desktop.createWindow({
				id: window_id,
				title:'新增供应商信息表',
				layout:"fit",
				closable:true,
				closeAction:"destroy",
				items:[_view],
				iconCls: 'bogus',
				maximizable:false,
				animCollapse:false,
				constrainHeader:true
			});
			*/
			
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
					url:GLOBAL_ROOT_PATH+"/provider/add",
					waitTitle : '提示',
					waitMsg : '正在提交数据,请稍候...',
					success: function(form, action) {
						if (true==action.result.success){
							Ext.Msg.alert('成功', action.result.msg);
							me.getProvider_gridpanel().getStore().reload();
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
						url: GLOBAL_ROOT_PATH+'/provider/del',
						params: {
							id: rec.get('providerCode')
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
			var window_id='Provider_edit_window';

			//以下检测是否该窗口已经打开,如果已经打开则不再重新创建新窗口
			var edit_window=Ext.getCmp(window_id);
			if (edit_window){
				edit_window.show();
				return ;
			}
			
			/*			
			var desktop = this.app.getDesktop();
			if (desktop.getWindow(window_id)){
				desktop.restoreWindow(desktop.getWindow(window_id));
				return;
			}
			*/
			
			var store = btn.up('panel').down('gridpanel').getStore();
			var grid = btn.up('panel').down('gridpanel');
			var sm = grid.getSelectionModel();
			var sel_count=sm.getCount();
			if (sel_count!=1){
				Ext.Msg.alert('错误', '请先选中要编辑的记录!');
				return;
			}
			var edit_record = sm.getSelection()[0];
			
			var _view=Ext.widget('Provider_Edit');
			
			edit_window=Ext.create('Ext.window.Window', {
				id: window_id,
				title:'编辑供应商信息',
				layout:"fit",
				closable:true,
				modal:false,
				closeAction:"destroy",
				items:[_view],
				iconCls: 'bogus',
				maximizable:false,
				animCollapse:false,
				constrainHeader:true
			});
			
			/*			
			var edit_window = desktop.createWindow({
				id: window_id,
				title:'编辑供应商信息表',
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
			*/
			
			edit_window.down('form').loadRecord(edit_record);
			//加载下拉列表框值及赋予缺省值
			edit_window.show();
		},
		//保存修改结果的方法
		save_edit:function(btn){
			var me=this;
			var edit_window=btn.up('window');
			var form = edit_window.down('form').getForm();
			if (form.isValid()) {
				form.submit({
					url:GLOBAL_ROOT_PATH+"/provider/edit",
					waitTitle : '提示',
					waitMsg : '正在提交数据,请稍候...',
					success: function(form, action) {
						if (true==action.result.success){
							Ext.Msg.alert('成功', action.result.msg);
							me.getProvider_gridpanel().getStore().reload();
							me.getProvider_gridpanel().getSelectionModel().deselectAll();
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