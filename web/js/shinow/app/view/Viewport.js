Ext.define('app.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    alias: 'widget.main_viewport',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    layout: {
        type: 'border'
    },
    items: [{
        region: "north",
        collapsible: false,
        border: false,
        height: 90,
        layout: 'column',
        items: [{
            columnWidth: 1,
            border: false,
            height: 90,
            bodyStyle: 'background: url(./img/top_img.jpg) #fff no-repeat;'
        }, {
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
                    }
                }
            }]
        }]
    },
        {
            title: "菜单",
            id: 'menu-panel',
            region: "west",
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
            xtype:'tabpanel',
            region: "center",
            id: 'content_tabpanel',
            margins: '2 5 5 0',
            activeTab: 0,
            border: false,
            items: [{
                id: 'start-panel',
                title: '欢迎使用',
                layout: 'hbox',
                bodyStyle: 'padding:25px; background-image: url(./img/bg.jpg); background-repeat: no-repeat;  background-attachment: fixed;  background-position: 100% 100%',
                items:[
                    {
                        xtype:'chart',
                        animate: true,
                        width:200,
                        height:200,
                        store: new Ext.data.ArrayStore({
                            fields: ['name', 'data1'],
                            data: [{name:"a",data1:1},{name:"b",data1:2}]
                        }),
                        shadow: true,
                        legend: {
                            position: 'right'
                        },
                        insetPadding: 60,
                        theme: 'Base:gradients',
                        series: [{
                            type: 'pie',
                            field: 'data1',
                            showInLegend: true,
                            donut: 35,
                            tips: {
                                trackMouse: true,
                                width: 140,
                                height: 28,
                                renderer: function(storeItem, item) {
                                    ////calculate percentage.
                                    //var total = 0;
                                    //store1.each(function(rec) {
                                    //    total += rec.get('data1');
                                    //});
                                    //this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data1') / total * 100) + '%');
                                }
                            },
                            highlight: {
                                segment: {
                                    margin: 20
                                }
                            },
                            label: {
                                field: 'name',
                                display: 'rotate',
                                contrast: true,
                                font: '18px Arial'
                            }
                        }]
                    }
                ]
            }]
        }
    ],
    initComponent: function () {
        var me = this;
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
        Ext.MessageBox.show({title:'请稍候',  msg:'正在加载菜单数据，请耐心等待...'});

        Ext.Ajax.request({
            url: GLOBAL_ROOT_PATH + '/menu',
            success: function (response, request) {
                Ext.MessageBox.hide();
                var res = Ext.JSON.decode(response.responseText);

                var menu_panels=new Array();
                for (var i = 0; i < res.subMenuList.length; i++) {
                    var rec = res.subMenuList[i];

                    menu_panels[i]=Ext.create('Ext.panel.Panel',{
                        title:rec.menuName,
                        titleAlign :'center',
                        layout: {
                            type: 'vbox',
                            padding: '5',
                            align: 'stretch'
                        },
                        defaults: {margin: '5 0 5 0'},
                        items: [
                        ]
                    });

                    for (var j=0;j<rec.subMenuList.length;j++){
                        var subrec=rec.subMenuList[j];
                        var btn=Ext.create('Ext.button.Button',{
                            xtype: 'button',
                            icon: './static/css/img/add.gif',
                            scale: 'medium',
                            style:{
                                marginBottom: '10px'
                            },
                            menuCode:subrec.menuCode,
                            menuName:subrec.menuName,
                            menuUrl:subrec.menuUrl,
                            iconUrl:subrec.iconUrl,
                            controllerFullClassname:subrec.controllerFullClassname,
                            controllerShortName:subrec.controllerShortName,
                            defaultViewClassname:subrec.defaultViewClassname,
                            handler:function(e){
                                me.menuClick(me,this.controllerFullClassname,this.defaultViewClassname,this.menuName,this.menuCode);
                            },
                            text: subrec.menuName
                        });
                        menu_panels[i].items.add(btn);
                    }

                }
                var _tmp_accordion_panel=Ext.getCmp('accordion-panel');
                _tmp_accordion_panel.removeAll(true);
                _tmp_accordion_panel.add(menu_panels);
                _tmp_accordion_panel.doLayout();
            },
            failure: function () {
                Ext.MessageBox.hide();
                alert('sorry!');
            }
        });
        me.callParent(arguments);
    },
    menuClick:function(viewport,controller_full_class,default_view_class,menu_name,menu_code){

        var id = 'tab_' + menu_code;//id名称里面不能带点
        var center =  Ext.getCmp('content_tabpanel');
        var tab = center.queryById(id);

        //如果从来没有加载过,需要异步加载controller js类文件,加载完后在回调函数中初始化tab
        if (!Ext.ClassManager.isCreated(controller_full_class)) {
            Ext.require(controller_full_class,function(){
                var tmp_controller = viewport.application.getController(controller_full_class);
                //tmp_controller.init(viewport.application);
                tab = center.add(Ext.widget(default_view_class, {itemId: id, title: menu_name,closable : true}));
                center.setActiveTab(tab);
            },viewport);
        }else{
            //如果不是第一次加载了,判断是否已经显示处理
            if(!tab){
                //如果没有显示时
                tab = center.add(Ext.widget(default_view_class, {itemId: id, title: menu_name,closable : true}));
            }
            center.setActiveTab(tab);
        }
    }
});