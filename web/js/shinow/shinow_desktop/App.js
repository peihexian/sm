function genSubMenu(module_object,Json_data_set,parent_menu){
    Ext.each(Json_data_set, function (data) {
         var menu_name = data.data.menu_name;//取得菜单名称
         var extjs_menu;
         if (data.child_nodes.length>0){ //如果有子菜单时,带上子菜单的初始化项
         	 //extjs_menu=Ext.create('Ext.menu.Item',{text:menu_name,menu:{items:[]},app:module_object.app,have_child:true});	
         	 extjs_menu=Ext.create('Ext.menu.Item',{text:menu_name,menu:new Ext.menu.Menu(),app:module_object.app,have_child:true});	
         }else{
         	//没有子菜单时
         	 extjs_menu=Ext.create('Ext.menu.Item',{text:menu_name,app:module_object.app,handler:module_object.createWindow,controller_name:data.data.link_url,main_view_name:data.data.def_view});
         }
         if (parent_menu.launcher){
         	parent_menu.launcher.menu.add(extjs_menu);
         }else if (parent_menu.menu.add){
         	parent_menu.menu.add(extjs_menu);
         }else{
         	parent_menu.menu.items.push(extjs_menu);
         }
         if (data.child_nodes.length>0){
             genSubMenu(module_object,data.child_nodes,extjs_menu);
         }
    });
}
Ext.define('MyDesktop.App', {
    extend: 'Ext.ux.desktop.App',

    requires: [
        'Ext.window.MessageBox',
        'Ext.ux.desktop.ShortcutModel',
        'MyDesktop.SystemSettingsMenu',
		'MyDesktop.ShinowMenu',
        'MyDesktop.SystemStatus',
        'MyDesktop.Settings'
    ],

    init: function() {
        this.callParent();
    },

    getModules : function(){
    	var me=this;
		 var menuArray = [];
         Ext.Ajax.request({
            url: GLOBAL_ROOT_PATH+'/menu_tree',
            async: false,
            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);
                Ext.each(result.child_nodes, function (data) {
                    var menu_name = data.data.menu_name;
                    var shinow_menu;
                    if (data.child_nodes.length>0){
                    	shinow_menu=Ext.create('MyDesktop.ShinowMenu',{text:menu_name,menu:new Ext.menu.Menu(),app:me,have_child:true});	
                       genSubMenu(shinow_menu,data.child_nodes,shinow_menu);
                    }else{
                    	shinow_menu=Ext.create('MyDesktop.ShinowMenu',{text:menu_name,app:me,controller_name:data.data.link_url,main_view_name:data.data.def_view});
                    }
                    menuArray.push(shinow_menu);
                });
            }});
            
            menuArray.push(new MyDesktop.SystemStatus());
            return menuArray;
          
    	//return [new MyDesktop.SystemSettingsMenu()];
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

	 	var cp = new Ext.state.CookieProvider();
  		Ext.state.Manager.setProvider(cp);
  		var wallpapers_img_url=cp.get("wallpapers"); //背景图片的url,从cookie里面读取
        if (!wallpapers_img_url){
        	wallpapers_img_url='static/css/img/wallpapers/Wood-Sencha.jpg';
        }
        var wallpapers_stretch=cp.get("wp_st"); //背景图片是否填满整个屏幕,从cookie里面读取
        if (!wallpapers_stretch){
        	wallpapers_stretch=false;
        }
        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                { text: '修改设定', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [
                    { name: 'Grid Window', iconCls: 'grid-shortcut', module: 'grid-win' },
                    { name: 'Accordion Window', iconCls: 'accordion-shortcut', module: 'acc-win' },
                    { name: 'Notepad', iconCls: 'notepad-shortcut', module: 'notepad' },
                    { name: 'System Status', iconCls: 'cpu-shortcut', module: 'systemstatus'}
                ]
            }),

            wallpaper:wallpapers_img_url,
            wallpaperStretch: wallpapers_stretch
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: '启奥实训',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'设定',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'退出',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();
        var me=this;

        return Ext.apply(ret, {
            quickStart: [
                { name: '平铺窗口', iconCls: 'accordion', module: new Ext.ux.desktop.Module({handler:me.tileWindows})},
                { name: '层叠窗口', iconCls: 'icon-grid', module: new Ext.ux.desktop.Module({handler:me.cascadeWindows})},
                { name: '显示桌面', iconCls: 'option', module: new Ext.ux.desktop.Module({handler:me.minWindows})}
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    cascadeWindows:function(){
    	var me=this;
    	me.app.getDesktop().cascadeWindows();
    },
    tileWindows:function(){
    	var me=this;
    	me.app.getDesktop().tileWindows();
    },
    minWindows:function(){
    	var me=this;
    	me.app.getDesktop().minAllWindows();
    },
    onLogout: function () {
		Ext.Msg.confirm('请确认', '真的退出系统吗?',function(btn){
			if (btn=='yes'){
				window.location.href=GLOBAL_ROOT_PATH+'/login/logout';
			}
		});
    },

    onSettings: function () {
        var dlg = new MyDesktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
