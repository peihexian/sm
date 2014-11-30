Ext.BLANK_IMAGE_URL = GLOBAL_ROOT_PATH + '/img/s.gif';
Ext.QuickTips.init();

// Define custom TreeReader
var MyTreeReader = Ext.extend(Ext.data.TreeReader, {
    extractData : function(root, returnRecords) {

        // convert node.
        var convertedRoot = convertNodeTree(root);

        var records = Ext.data.TreeReader.superclass.extractData.call(this, convertedRoot, returnRecords),
            ln = records.length,
            i  = 0,
            record;
        if (returnRecords) {
            for (; i < ln; i++) {
                record = records[i];
                record.doPreload = !!this.getRoot(record.raw);
            }
        }
        return records;
    }
});

Ext.onReady(
    function () {
        var menu_panels=Ext.create('Ext.panel.Panel',{
            layout: 'accordion',
            region: 'center',
            items: []
        });

        var menu_store = Ext.create('Ext.data.TreeStore', {
            autoLoad : true,
            proxy: {
                type: 'ajax',
                url: GLOBAL_ROOT_PATH+'/menu'
            },
            fields:['menuCode','menuName','menuUrl','iconUrl','parentMenuCode','subMenuList'],
            sorters: [{
                property: 'menuCode',
                direction: 'ASC'
            }],
            reader : {
                type : 'json',
                root:'subMenuList'
            }
        });



        // Register custom TreeReader as 'mytree'
        Ext.data.ReaderMgr.registerType('mytree', MyTreeReader);

        setTimeout(function () {
            var vp = new Ext.Viewport({
                layout: 'border',
                defaults: {
                    collapsible: false,
                    split: true
                },
                items: [{
                    region: "north",
                    collapsible:false,
                    border:false,
                    height: 90,
                    layout:'column',
                    items: [{
                        columnWidth: 1,
                        border:false,
                        height: 90,
                        bodyStyle:'background: url(./img/top_img.jpg) #fff no-repeat;'
                    },{
                        xtype:'panel',
                        border:false,
                        height: 90,
                        width: 250,
                        style:'background: transparent;',
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            style:'background: transparent;',
                            defaults: {minWidth: 30},
                            items: [
                                { xtype: 'component', flex: 1 },
                                { xtype: 'button', text: '退出' ,handler:function(){
                                    Ext.Msg.confirm('系统注销', '你确定要退出系统吗?', function (btn) {
                                        if (btn == 'yes') {
                                            window.location.href = GLOBAL_ROOT_PATH+'/login/logout';
                                        }
                                    })
                                }
                                }
                            ]
                        }],
                        items:[{
                            xtype:'combobox',
                            triggerAction: "all",
                            fieldLabel: '切换皮肤',
                            forceSelection: true,
                            listAlign: 'center',
                            typeAhead: true,
                            emptyText: "切换皮肤",
                            store: new Ext.data.SimpleStore({
                                fields: ['theme', 'css'],
                                data: [
                                    ['默 认', 'ext-all.css'],
                                    ['access', 'ext-all-access.css'],
                                    ['gray', 'ext-all-gray.css'],
                                    ['neptune', 'ext-all-neptune.css']
                                ]
                            }),
                            displayField: "theme",
                            valueField: "css",
                            mode: "local",
                            listeners: {
                                'select': function (e) {
                                    var conboBoxValue = e.getValue();
                                    var cp = new Ext.state.CookieProvider();
                                    Ext.state.Manager.setProvider(cp);
                                    cp.setCookie('color',conboBoxValue);
                                    Ext.util.CSS.swapStyleSheet(
                                        'theme',
                                        './static/js/extjs/resources/css/' + conboBoxValue
                                    );
                                }
                            }
                        }]
                    }]
                }, {
                    title: "菜单",
                    region: "west",
                    id: 'accordion-panel',
                    width: 205,
                    minSize: 150,
                    layout: 'border',
                    margins: '2 0 5 5',
                    maxSize: 250,
                    defaults: {
                        border: false
                    },
                    items: [{
                        layout: 'accordion',
                        region: 'center',
                        items: [{
                            title: '导航菜单',
                            iconCls: 'icon-nav',
                            border: false,
                            items: [ menu_panels
                            //    {
                            //    xtype: 'treepanel',
                            //    border: false,
                            //    store:menu_store,
                            //    rootVisible: false,
                            //    autoScroll: true,
                            //    listeners: {
                            //        'click': function (n) {
                            //            try {
                            //                var sn = this.selModel.selNode || {};
                            //                if (n.leaf && n.id != sn.id) {
                            //                    var panel = n.id.substring(0, n.id.indexOf("-")) + "-panel";
                            //                    Ext.getCmp('content-panel').layout.setActiveItem(panel);
                            //
                            //                }
                            //            } catch (e) {
                            //            }
                            //        }
                            //    }
                            //}
                            ]
                        }]
                    }]
                }, {
                    region: "center",
                    id: 'content-panel',
                    layout: 'card',
                    margins: '2 5 5 0',
                    activeItem: 0,
                    border: false,
                    items: [{
                        id: 'start-panel',
                        title: '欢迎使用',
                        layout: 'fit',
                        bodyStyle: 'padding:25px; background-image: url(./img/bg.jpg); background-repeat: no-repeat;  background-attachment: fixed;  background-position: 100% 100%'
                    } ]
                }]
            });
            var cp = new Ext.state.CookieProvider();
            Ext.state.Manager.setProvider(cp);
            var css = cp.get('color');
            if ((null==css) || (undefined==css)){
                css="ext-all.css";
            }
            Ext.util.CSS.swapStyleSheet(
                'theme',
                './static/js/extjs/resources/css/' + css
            );
        }, 250)
    });