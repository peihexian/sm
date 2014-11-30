/**
 * <p>
 * 启奥班级信息表 controller
 * </p>
 * 
 * @author 代码生成器
 * @class app.controller.ClassInfo
 * @extends Ext.app.Controller
 */
 Ext.define('app.controller.frameController',{
		extend : 'Ext.app.Controller',
		alias : 'controller.frameController',
		views : ['Viewport'],
		refs:[
	        {ref:'tabpanel',selector:'main_viewport>tabpanel[id=tabpanel]'}
	    ],
		init : function(application) {
			var me = this;
			window.application=me.getApplication();
			me.control({
				'main_viewport>panel[region=west]':{
					render:function(obj){
						var treepanel=Ext.create('Ext.tree.Panel',{
                                title:'test',
                                autoHeight:true,
                                autoScroll: true,
                                split: true,
                                rootVisible:false,
                                lines:true,
                                store: Ext.create('Ext.data.TreeStore', {
						        	root: {
						        		expanded: true,
						        		children: [
						        		           {text: '班级信息', page: 'ClassInfo_List', controller_full_class_name:'app.controller.ClassInfo',leaf: true},
						        		           {text: '学历分类', page: 'SysEduLevel_List',controller_full_class_name:'app.controller.SysEduLevel',leaf: true},
						        		           {text: '学校信息', page: 'SchoolInfo_List', controller_full_class_name:'app.controller.SchoolInfo',leaf: true},
						        		           {text: '学生信息', page: 'Student_List', controller_full_class_name:'app.controller.Student',leaf: true},
						        		           {text: '高校机构信息', page: 'SchoolDept_List',controller_full_class_name:'app.controller.SchoolDept',leaf: true},
						        		           {text: '教学情况记录', page: 'TeachRecord_List',controller_full_class_name:'app.controller.TeachRecord',leaf: true},
						        		           {text: '工作岗位分类', page: 'SysJobType_List', controller_full_class_name:'app.controller.SysJobType',leaf: true}
						        		]
						        	}
                                }),
			 					listeners: {
						        	'itemclick': function(view, record){
						        		if (!Ext.ClassManager.isCreated(record.raw.controller_full_class_name)) {
			                                me.getApplication().getController(record.raw.controller_full_class_name);
			                            }
                                		if(record.isLeaf()){
							    			var id = 'tab-' + record.internalId;
							    			var center =  me.getTabpanel();//view.up('viewport').down('tabpanel');
							    			var tab = center.queryById(id);
							    			if(!tab){
							    				tab = center.add(Ext.widget(record.raw.page, {itemId: id, title: record.get('text'),closable : true}));
							    			}
							    			center.setActiveTab(tab);
							    		}
						        }
			 				}
						});
						obj.items.add(treepanel);
					}
				}
			});
		}
 		
 });