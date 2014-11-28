Ext.define('app.view.Viewport', {
	renderTo: Ext.getBody(),
	extend: 'Ext.container.Viewport',
	alias: 'widget.main_viewport',
	requires:[
	    'Ext.tab.Panel',
	    'Ext.layout.container.Border'
	],
	layout: {
		type: 'border'
	},
	items: [
		{
		    region: 'north',
		    xtype:'panel',
		    html: '<h1 class="x-panel-header">启奥实训教学管理平台</h1>',
		    border: false,
		    margins: '0 0 5 0'
		},	        
	    {
	    	region: 'west',
   			collapsible: true,
        	title: '功能导航',
        	id:'menu_panel',
        	width: 200,
        	xtype: 'panel',
//			layout: {
//		        type: 'accordion',
//		        xtype: 'panel',
//		        titleCollapse: true,
//		        animate: true,
//		        activeOnTop: false
//		    },
		    items: [
		    	/*
		    		{
		        title: '系统设置',
				xtype: 'treepanel',
				title: 'west'
				,
		        store: Ext.create('Ext.data.TreeStore', {
			        	root: {
			        		expanded: true,
			        		children: [
			        		           {text: '班级信息', page: 'ClassInfo_List', controller_full_class_name:'app.controller.ClassInfo',leaf: true},
			        		           {text: '学历分类', page: 'SysEduLevel_List', controller_full_class_name:'app.controller.SysEduLevel',leaf: true},
			        		           {text: '学校信息', page: 'SchoolInfo_List', leaf: true},
			        		           {text: '学生信息', page: 'Student_List', leaf: true},
			        		           {text: '高校机构信息', page: 'SchoolDept_List', leaf: true},
			        		           {text: '教学情况记录', page: 'TeachRecord_List', leaf: true},
			        		           {text: '工作岗位分类', page: 'SysJobType_List', leaf: true}
			        		]
			        	}
			        }),
			        listeners: {
			        	'itemclick': function(view, record){
			        		if (!Ext.ClassManager.isCreated(record.raw.controller_full_class_name)) {
                                var init = getApplication().getController(record.raw.controller_full_class_name);
                                init.init();
                            }
			        		
			        		if(record.isLeaf()){
			        			var id = 'tab-' + record.internalId;
			        			var center = view.up('viewport').down('tabpanel');
			        			var tab = center.queryById(id);
			        			if(!tab){
			        				tab = center.add(Ext.widget(record.raw.page, {itemId: id, title: record.get('text'),closable : true}));
			        			}
			        			center.setActiveTab(tab);
			        		}
			        	}
			        }
		    },
		    */
		   ]     
    },{
        region: 'center',
        xtype: 'tabpanel',
        id:'tabpanel',
        itemId: 'center',
        resizeTabs : true, // 改变选项大小
        minTabWidth : 115,//每个选项的最小宽度
        tabWidth : 135,//每个选项的宽度
        activeTab : 0, // 当前活动面板为第一个，索引为0
        enableTabScroll : true,//可以左右滑动
        defaults : {
              autoScroll : true
         }
    }]
});