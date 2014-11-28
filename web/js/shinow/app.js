var application;
var _myDesktopApp;

Ext.tip.QuickTipManager.init();

Ext.Loader.setConfig({
	disableCaching:false,
    enabled: true,
    paths: {
        'Ext.ux.desktop': 'static/js/lib/desktop',
        'MyDesktop': 'js/shinow/shinow_desktop'
    }
});


Ext.require('MyDesktop.App');
        
//Ext.Ajax.disableCaching = false;

application =new Ext.application({
	requires: [
		'Ext.window.MessageBox',
		'Ext.container.Viewport'
	],
	name: 'app',
	appFolder:'js/shinow/app',
    autoCreateViewport: false,
    controllers: [
       // 'webdesktop.Desktop'
    ],
    views: [
    ],
    stores: [],
    ERRORCODE: {
        'BADREQUEST' : 400,
        'AUTHENTICATION' : 401,
        'PRECONDITION' : 412
    },
    launch: function() {
        var me = this;
        Ext.QuickTips.init();
        Ext.Ajax.on('requestcomplete', me.onAjaxRequest,me);
       _myDesktopApp = Ext.create('MyDesktop.App');
       _myDesktopApp.application=me;
       
    },
    onAjaxRequest: function(connection, response, options) {
        var me = this; // scope: app
        /*
        try {
            if (response.responseText) {
                var jsonData = Ext.JSON.decode(response.responseText);
                if(jsonData.success === false) {
                    switch(jsonData.code) {
                        case me.ERRORCODE.AUTHENTICATION:
                            console.log('User timed out, force to login');
                        break;
                        case me.ERRORCODE.BADREQUEST:
                            console.log('check for MSG, display MSG');
                        break;
                        case me.ERRORCODE.PRECONDITION:
                            console.log('check for MSG, display MSG');
                        break;
                        default:
                            console.log('unknown error occured');
                    }
                }
            }
        } catch(err) {
            console.log('Irregular JSON');
        }
        */
    }
});


function refresh4Session()
{
	Ext.Ajax.request({url: GLOBAL_ROOT_PATH+'/blank.jsp'});
    setTimeout(refresh4Session,5*60*1000);//五分钟
}
refresh4Session();
