Ext.define('MyDesktop.ShinowMenu', {
    extend: 'Ext.ux.desktop.Module',

	config: {
         text: '',
         iconCls: 'bogus',
         handler : this.createWindow,
         windowId:'',
         controller_name:'',
         main_view_name:'',
         menu: new Ext.menu.Menu(), // {items:[]},
         app:null,
         have_child:false
     },
     constructor: function(cfg) {
         this.initConfig(cfg);
         this.callParent();
     },
    
    init : function() {
    	if (this.have_child===true){
	        this.launcher ={
		        text:this.text,
		        windowId:this.text,
		        iconCls: this.iconCls,
		        handler: Ext.emptyFn,
		        menu:this.menu
	        };
    	}else{
	        this.launcher ={
		        text:this.text,
		        windowId:this.text,
		        iconCls: this.iconCls,
		        scope:this,
		        controller_name:this.controller_name,
		        main_view_name:this.main_view_name,
		        handler: this.handler
	        };
    	}
        //Ext.log(this.launcher.text);
    },

    createWindow : function(src){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow(this.text);
        
        if (win){
        	desktop.restoreWindow(win);
        	return;
        }
        
        var controller_name;
        var main_view_name;
        if (src){
	        controller_name=src.controller_name;
	        main_view_name=src.main_view_name;
        }else{
	        controller_name=this.controller_name;
	        main_view_name=this.main_view_name;
        }
        
		if (!Ext.ClassManager.isCreated(controller_name)) {  
            var _controller=this.app.application.getController(controller_name);
            _controller.app=this.app;
         }          
       
        if(!win){
        	var list_view=Ext.widget(main_view_name);
            win = desktop.createWindow({
                id: 'win'+controller_name,//this.text,
                title:this.text,
                border:false,
                layout:"fit",
                width:640,
                height:480,
                plain:true,
                closable:true,
                floating:true,
                closeAction:"destroy",
                items:[list_view],
                iconCls: 'bogus',
                animCollapse:false,
                draggable:true,
                constrainHeader:true
            });
        }
        win.show();
        return win;
    }    
});