Ext.define('app.view.main.Main_Top_Panel', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    viewport:null,
    alias: 'widget.main_top_panel',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            collapsible: false,
            border: false,
            height: 90,
            layout: 'column',
            items: [
                {
                    columnWidth: 1,
                    border: false,
                    height: 90,
                    bodyStyle: 'background: url(./img/top_img.jpg) #fff no-repeat;'
                }
                ,
                {
                    xtype: 'panel',
                    border: false,
                    height: 90,
                    width: 250,
                    style: 'background: transparent;',
                    dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'bottom',
                        ui: 'footer',
                        style: 'background: transparent;',
                        defaults: {minWidth: 30},
                        items: [
                            {xtype: 'component', flex: 1},
                            {xtype:'label',text:'当前用户:'+global_current_login_user},
                            {
                                xtype: 'button', text: '退出', handler: function () {
                                Ext.Msg.confirm('系统注销', '你确定要退出系统吗?', function (btn) {
                                    if (btn == 'yes') {
                                        window.location.href = GLOBAL_ROOT_PATH + '/login/logout';
                                    }
                                })
                            }
                            }
                        ]
                    }],
                    items: [{
                        xtype: 'combobox',
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
                                cp.setCookie('color', conboBoxValue);
                                Ext.util.CSS.swapStyleSheet(
                                    'theme',
                                    './static/js/extjs/resources/css/' + conboBoxValue
                                );
                                me.viewport.doLayout();
                            }
                        }
                    }]
                }
            ]
        });
        me.callParent(arguments);
    }
});