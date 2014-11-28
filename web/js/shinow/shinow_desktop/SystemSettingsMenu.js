Ext.define('MyDesktop.SystemSettingsMenu', {
    extend: 'Ext.ux.desktop.Module',

    init : function() {

        this.launcher = {
            text: '系统设置',
            iconCls: 'bogus',
            handler: function() {
                return false;
            },
            menu:_user_menu 
            /*
            	{
                items: [
                	
                ]
            }
            */
        };

        /*
        var windowIndex=0;
        for (var i = 0; i < 5; ++i) {
            this.launcher.menu.items.push({
                text: 'Window '+(++windowIndex),
                iconCls:'bogus',
                handler : this.createWindow,
                scope: this,
                windowId: windowIndex
            });
        }
        */
    },

    createWindow : function(src){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('窗口'+src.windowId);
        
        var controller_name="app.controller.ClassInfo";
        
		if (!Ext.ClassManager.isCreated(controller_name)) {  
            var _controller=this.app.application.getController(controller_name);
            _controller.app=this.app;
         }          
       
        if(!win){
        	var list_view=Ext.widget("ClassInfo_List");
            win = desktop.createWindow({
                id: 'bogus'+src.windowId,
                title:src.text,
                 layout:"fit",
                width:640,
                height:480,
                                        closable:true,
                        closeAction:"destroy",

                 items:[list_view],
                iconCls: 'bogus',
                animCollapse:false,
                constrainHeader:true
            });
        }
        win.show();
        return win;
    }    
});