/**
 * <p>
 * 订单信息表 controller
 * </p>
 * 
 * @author 代码生成器
 * @class app.controller.OrderInfo
 * @extends Ext.app.Controller
 */
 Ext.define('app.controller.OrderInfo',{
		extend : 'Ext.app.Controller',
		alias : 'controller.OrderInfo',
		requires : [ 'app.model.OrderInfo', 'app.store.OrderInfo','app.view.orderinfo.OrderInfo_List','app.view.orderinfo.OrderInfo_Add','app.view.orderinfo.OrderInfo_Edit' ],
		models: ['OrderInfo'],
		views : ['orderinfo.OrderInfo_List','orderinfo.OrderInfo_Add','orderinfo.OrderInfo_Edit'],
		stores : ['OrderInfo'],
		refs : [
			{
				ref : 'orderinfo_gridpanel',
				selector : 'OrderInfo_List>gridpanel'
			}
		],
		init : function(application) {
			var me = this;
			me.control({
				'OrderInfo_List>gridpanel':{
					render : this.loadDefaultListData
				},
				'OrderInfo_List>toolbar button[action=add]':{
					click : this.add
				},
				'OrderInfo_List>toolbar button[action=edit]' : {
					click : this.edit
				},
				'OrderInfo_List>toolbar button[action=del]':{
					click : this.del
				},
				'OrderInfo_Add  button[action=save]':{
					click:this.save_add
				},
				'OrderInfo_Edit  button[action=save]':{
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
			var window_id='OrderInfo_add_window';
			
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
			var new_record = Ext.create('app.model.OrderInfo',{
				//default data
			});

			var _view=Ext.widget('OrderInfo_Add');
			add_window=Ext.create('Ext.window.Window', {
				id: window_id,
				title:'新增订单信息表',
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
			var add_window = desktop.createWindow({
				id: window_id,
				title:'新增订单信息表',
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
					url:GLOBAL_ROOT_PATH+"/orderinfo/add",
					waitTitle : '提示',
					waitMsg : '正在提交数据,请稍候...',
					success: function(form, action) {
						if (true==action.result.success){
							Ext.Msg.alert('成功', action.result.msg);
							me.getOrderinfo_gridpanel().getStore().reload();
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
						url: GLOBAL_ROOT_PATH+'/orderinfo/del',
						params: {
							id: rec.get('billCode')
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
			var window_id='OrderInfo_edit_window';

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
			
			var _view=Ext.widget('OrderInfo_Edit');
			
			edit_window=Ext.create('Ext.window.Window', {
				id: window_id,
				title:'编辑订单信息表',
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
				title:'编辑订单信息表',
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
			var deliveryCode_combobox=edit_window.down('textfield[name=deliveryCode]');
			deliveryCode_combobox.getStore().load(
				function(records, operation, success) {
					if (true==success){
						deliveryCode_combobox.setValue(edit_record.get('deliveryCode'));
					}
				}
			);
			var outStockId_combobox=edit_window.down('textfield[name=outStockId]');
			outStockId_combobox.getStore().load(
				function(records, operation, success) {
					if (true==success){
						outStockId_combobox.setValue(edit_record.get('outStockId'));
					}
				}
			);
			var userName_combobox=edit_window.down('textfield[name=userName]');
			userName_combobox.getStore().load(
				function(records, operation, success) {
					if (true==success){
						userName_combobox.setValue(edit_record.get('userName'));
					}
				}
			);
			var userId_combobox=edit_window.down('textfield[name=userId]');
			userId_combobox.getStore().load(
				function(records, operation, success) {
					if (true==success){
						userId_combobox.setValue(edit_record.get('userId'));
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
					url:GLOBAL_ROOT_PATH+"/orderinfo/edit",
					waitTitle : '提示',
					waitMsg : '正在提交数据,请稍候...',
					success: function(form, action) {
						if (true==action.result.success){
							Ext.Msg.alert('成功', action.result.msg);
							me.getOrderinfo_gridpanel().getStore().reload();
							me.getOrderinfo_gridpanel().getSelectionModel().deselectAll();
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