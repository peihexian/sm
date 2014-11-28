Ext.BLANK_IMAGE_URL = GLOBAL_ROOT_PATH + '/img/s.gif';
Ext.QuickTips.init();
var start = {
    id: 'start-panel',
    title: '欢迎使用',
    layout: 'fit',
    bodyStyle: 'padding:25px',
    html: '<img src="./img/bg.jpg"/>'
};
var themes = new Ext.data.SimpleStore({
    fields: ['theme', 'css'],
    data: [
        ['默 认', 'ext-all.css'],
        ['access', 'ext-all-access.css'],
        ['gray', 'ext-all-gray.css']
    ]
});
var color_change = new Ext.form.ComboBox({
    triggerAction: "all",
    fieldLabel: '切换皮肤',
    forceSelection: true,
    listAlign: 'center',
    typeAhead: true,
    emptyText: "切换皮肤",
   // width: 140,
    store: themes,
    displayField: "theme",
    valueField: "css",
    mode: "local",
    listeners: {
        'select': function (e) {
            var conboBoxValue = color_change.getValue();
            var cp = new Ext.state.CookieProvider();
            Ext.state.Manager.setProvider(cp);
            cp.setCookie('color',conboBoxValue);
            Ext.util.CSS.swapStyleSheet(
                'theme',
                './static/js/extjs/resources/css/' + conboBoxValue
            );
        }
    }
});
Ext.onReady(
    function () {
        setTimeout(function () {
            var vp = new Ext.Viewport({
                layout: 'border',
                defaults: {
                    collapsible: false,
                    split: true
                },
                items: [{
                    collapsible:false,
                    border:false,
                    region: "north",
                    bodyStyle:'background: url(./img/top_img.jpg) #fff no-repeat;',
                    height: 90
                }, {
                    title: "菜单",
                    region: "west",
                    id: 'accordion-panel',
                    width: 150,
                    minSize: 150,
                    layout: 'border',
                    margins: '2 0 5 5',
                    maxSize: 250,
                    tbar: [color_change],
                    bbar: [{
                        iconCls: 'icon-zhuxiao',
                        text: '注销系统',
                        handler: function () {
                            Ext.Msg.confirm('系统注销', '你确定要注销系统吗?数据都保存了吗?', function (btn) {
                                if (btn == 'yes') {
                                    window.location.href = 'login.do?type=logout';
                                }
                            })

                        }
                    }],
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
                            items: [{
                                xtype: 'treepanel',
                                border: false,
                                rootVisible: false,
                                autoScroll: true,
                                listeners: {
                                    'click': function (n) {
                                        try {
                                            var sn = this.selModel.selNode || {};
                                            if (n.leaf && n.id != sn.id) {
                                                var panel = n.id.substring(0, n.id.indexOf("-")) + "-panel";
                                                Ext.getCmp('content-panel').layout.setActiveItem(panel);

                                            }
                                        } catch (e) {
                                        }
                                    }
                                }
                            }]
                        }]
                    }]
                }, {
                    region: "center",
                    id: 'content-panel',
                    layout: 'card',
                    margins: '2 5 5 0',
                    activeItem: 0,
                    border: false,
                    items: [start ] //unit, ssort, provider, p_spec, p_goods, p_goodsBrowse, ingoods, outgoods, inreport, outreport, org
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