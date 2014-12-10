Ext.define('app.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    alias: 'widget.main_viewport',
    requires: [
        'Ext.tab.Panel',
        'Ext.ux.TabCloseMenu',
        'Ext.layout.container.Border',
        'app.store.StockChartPieStore',
        'app.view.main.Main_Top_Panel',
        'app.view.main.Main_Pie_Chart',
        'app.view.main.Main_Column_Chart'
    ],
    layout: {
        type: 'border'
    },
    initComponent: function () {
        var me = this;
        var chart_data_store = Ext.create('app.store.StockChartPieStore');
        Ext.applyIf(me, {
                items: [
                    {
                        region: "north",
                        xtype: 'main_top_panel',
                        viewport: me
                    },
                    {
                        region: "west",
                        title: "菜单导航",
                        id: 'menu-panel',
                        split: true,
                        collapsible: true,
                        floatable: false,
                        width: 205,
                        layout: 'border',
                        margins: '2 0 5 5',
                        defaults: {
                            border: false
                        },
                        items: [
                            {
                                id: 'accordion-panel',
                                layout: 'accordion',
                                region: 'center',
                                items: [
                                    {
                                        title: '入库管理',
                                        layout: {
                                            type: 'vbox',
                                            padding: '5',
                                            align: 'stretch'
                                        },
                                        defaults: {margin: '5 0 5 0'},
                                        items: [
                                            {
                                                xtype: 'button',
                                                icon: './static/css/img/add.gif',
                                                scale: 'medium',
                                                text: '入库管理'
                                            },
                                            {
                                                xtype: 'button',
                                                icon: './static/css/img/add.gif',
                                                scale: 'medium',
                                                text: '出库管理'
                                            }
                                        ]
                                    },
                                    {
                                        title: '系统管理',
                                        iconCls: 'icon-nav',
                                        border: false,
                                        items: [
                                            {
                                                xtype: 'menuitem',
                                                text: 'test'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }, {
                        xtype: 'tabpanel',
                        region: "center",
                        id: 'content_tabpanel',
                        margins: '2 5 5 0',
                        activeTab: 0,
                        border: false,
                        plugins : Ext.create('Ext.ux.TabCloseMenu', {
                            closeTabText : '关闭当前页',
                            closeOthersTabsText : '关闭其他页',
                            closeAllTabsText : '关闭所有页'
                        }),
                        items: [{
                            id: 'start-panel',
                            title: '欢迎使用',
                            layout: 'hbox',
                            bodyStyle: 'padding:25px; background-image: url(./img/bg.jpg); background-repeat: no-repeat;  background-attachment: fixed;  background-position: 100% 100%',
                            items: [
                                {
                                    xtype: 'main_pie_chart',
                                    width:450,
                                    height:400,
                                    chart_store: chart_data_store
                                }
                                ,
                                {
                                    xtype: 'main_column_chart',
                                    margin:'0 0 0 5',
                                    width: 450,
                                    height: 400,
                                    chart_store: chart_data_store
                                }
                            ]
                        }]
                    }
                ]
            }
        );

        var cp = new Ext.state.CookieProvider();
        Ext.state.Manager.setProvider(cp);
        var css = cp.get('color');
        if ((null == css) || (undefined == css)) {
            css = "ext-all.css";
        }
        Ext.util.CSS.swapStyleSheet(
            'theme',
            './static/js/extjs/resources/css/' + css
        );
        Ext.MessageBox.wait({
            title: '请稍候',
            msg: '正在加载数据，请耐心等待...',
            wait: true,
            progress: true,
            closable: true,
            waitConfig: {
                interval: 200
            },
            icon: Ext.Msg.INFO
        });

        Ext.Ajax.request({
            url: GLOBAL_ROOT_PATH + '/menu',
            success: function (response, request) {
                Ext.MessageBox.hide();
                var res = Ext.JSON.decode(response.responseText);

                var menu_panels = new Array();
                for (var i = 0; i < res.menus.children.length; i++) {
                    var rec = res.menus.children[i];

                    menu_panels[i] = Ext.create('Ext.panel.Panel', {
                        title: rec.data.menu_name,
                        autoScroll: true,
                        titleAlign: 'center',
                        layout: {
                            type: 'vbox',
                            padding: '5',
                            align: 'stretch'
                        },
                        defaults: {margin: '5 0 5 0'},
                        items: []
                    });

                    for (var j = 0; j < rec.children.length; j++) {
                        var subrec = rec.children[j];
                        var btn = Ext.create('Ext.button.Button', {
                            xtype: 'button',
                            icon: './static/css/img/add.gif',
                            scale: 'medium',
                            style: {
                                marginBottom: '10px'
                            },
                            menuCode: subrec.data.menu_code,
                            menuName: subrec.data.menu_name,
                            menuUrl: subrec.data.menu_url,
                            iconUrl: subrec.data.icon_url,
                            controllerFullClassname: subrec.data.controller_full_classname,
                            controllerShortName: null,
                            defaultViewClassname: subrec.data.default_view_classname,
                            handler: function (e) {
                                me.menuClick(me, this.controllerFullClassname, this.defaultViewClassname, this.menuName, this.menuCode);
                            },
                            text: subrec.data.menu_name
                        });
                        menu_panels[i].items.add(btn);
                    }

                }
                var _tmp_accordion_panel = Ext.getCmp('accordion-panel');
                _tmp_accordion_panel.removeAll(true);
                _tmp_accordion_panel.add(menu_panels);
                _tmp_accordion_panel.doLayout();
            },
            failure: function () {
                Ext.MessageBox.hide();
                Ext.MessageBox.alert('错误', '通讯异常!请确认服务器是否正常工作!');
            }
        });
        me.callParent(arguments);
    },
    menuClick: function (viewport, controller_full_class, default_view_class, menu_name, menu_code) {

        var id = 'tab_' + menu_code;//id名称里面不能带点
        var center = Ext.getCmp('content_tabpanel');
        var tab = center.queryById(id);

        //如果从来没有加载过,需要异步加载controller js类文件,加载完后在回调函数中初始化tab
        if (!Ext.ClassManager.isCreated(controller_full_class)) {
            Ext.require(controller_full_class, function () {
                viewport.application.getController(controller_full_class);
                tab = center.add(Ext.widget(default_view_class, {itemId: id, title: menu_name, closable: true}));
                center.setActiveTab(tab);
            }, viewport);
        } else {
            //如果不是第一次加载了,判断是否已经显示处理
            if (!tab) {
                //如果没有显示时
                tab = center.add(Ext.widget(default_view_class, {itemId: id, title: menu_name, closable: true}));
            }
            center.setActiveTab(tab);
        }
    }
});

