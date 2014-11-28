

Ext.define('MyDesktop.TreeModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name' , type: 'string'},
        {name: 'iconCls'  , type: 'string', defaultValue: 'treenode-no-icon'},
        {name: 'expanded' , type: 'boolean', defaultValue: true, persist: false},
        {name: 'index'     , type: 'int'}
    ]
});

Ext.define('MyDesktop.TreeMenuStore', {
    extend: 'Ext.data.TreeStore',    
    model:  'MyDesktop.TreeModel',

    autoSync: true,
    autoLoad: true,

    root: {
        text: 'child_nodes',
        id: 'NULL',
        expanded: true
    },
	// 数据代理
   proxy : {
        // 请求方式
        type : 'ajax',
        // 请求网址
        url : GLOBAL_ROOT_PATH+'/menu_tree'
    }    
});

Ext.define('MyDesktop.Settings', {
    extend: 'Ext.window.Window',
    uses: [
        'Ext.tree.Panel',
        'Ext.tree.View',
        'Ext.form.field.Checkbox',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.Border',
        'Ext.ux.desktop.Wallpaper',
        'MyDesktop.WallpaperModel'
    ],

    layout: 'anchor',
    title: '修改设定',
    modal: true,
    width: 640,
    height: 480,
    border: false,
	closeAction:"destroy",
    initComponent: function () {
        var me = this;

        me.selected = me.desktop.getWallpaper();
        me.stretch = me.desktop.wallpaper.stretch;

        me.preview = Ext.create('widget.wallpaper');
        me.preview.setWallpaper(me.selected);
        me.tree = me.createTree();

        me.buttons = [
            { text: '确定', handler: me.onOK, scope: me },
            { text: '取消', handler: me.close, scope: me }
        ];

        me.items = [
        {
        	xtype:'tabpanel',
        	anchor:'100% 100%',
		    border: false,
        	items:[
        		{	title:'桌面背景',layout: 'anchor',bodyStyle:"background-color:#BBD7FA",
					items: [
					            {   xtype:'panel',
					                anchor: '0 -30',
					                border: false,
					                layout: 'border',
					                items: [
					                    me.tree,
					                    {
					                        xtype: 'panel',
					                        title: '预览',
					                        region: 'center',
					                        layout: 'fit',
					                        items: [ me.preview ]
					                    }
					                ]
					            },
					            {
					                xtype: 'checkbox',
					                boxLabel: '桌面背景显示整张图片',
					                checked: me.stretch,
					                listeners: {
					                    change: function (comp) {
					                        me.stretch = comp.checked;
					                    }
					                }
					            }
					        ]        		
        		},
        		{xtype:'panel',title:'桌面图标',layout: 'border',items:[
        		{
        			 xtype:'treepanel',
        			 region: 'west',
        			 split: true,
        			 width: 250,
        			 store: 'TreeMenuStore'
        		},
        		{
        			xtype:'grid',
        			 region: 'center',
        			 title:'被选中显示在桌面的功能',
        			 columns: [
					    {
					        text: 'Name',
					        dataIndex: 'name',
					        sortable: false,
					        hideable: false,
					        flex: 1
					    },
					    {
					        text: 'Email',
					        dataIndex: 'email',
					        hidden: true
					    },
					    {
					        text: 'Phone',
					        dataIndex: 'phone',
					        width: 100
					    }
					]
        		}
        		]}
        	]
        }] ;

        me.callParent();
    },

    createTree : function() {
        var me = this;

        function child (img) {
            return { img: img, text: me.getTextOfWallpaper(img), iconCls: '', leaf: true };
        }

        var tree = new Ext.tree.Panel({
            title: '桌面背景',
            rootVisible: false,
            lines: false,
            autoScroll: true,
            width: 150,
            region: 'west',
            split: true,
            minWidth: 100,
            listeners: {
                afterrender: { fn: this.setInitialSelection, delay: 100 },
                select: this.onSelect,
                scope: this
            },
            store: new Ext.data.TreeStore({
                model: 'MyDesktop.WallpaperModel',
                root: {
                    text:'背景',
                    expanded: true,
                    children:[
                        { text: "None", iconCls: '', leaf: true },
                        child('Blue-Sencha.jpg'),
                        child('Dark-Sencha.jpg'),
                        child('Wood-Sencha.jpg'),
                        child('blue.jpg'),
                        child('desk.jpg'),
                        child('desktop.jpg'),
                        child('desktop2.jpg'),
                        child('sky.jpg')
                    ]
                }
            })
        });

        return tree;
    },

    getTextOfWallpaper: function (path) {
        var text = path, slash = path.lastIndexOf('/');
        if (slash >= 0) {
            text = text.substring(slash+1);
        }
        var dot = text.lastIndexOf('.');
        text = Ext.String.capitalize(text.substring(0, dot));
        text = text.replace(/[-]/g, ' ');
        return text;
    },

    onOK: function () {
        var me = this;
        if (me.selected) {
            me.desktop.setWallpaper(me.selected, me.stretch);
		 	var cp = new Ext.state.CookieProvider();
  			Ext.state.Manager.setProvider(cp);
  			cp.set("wallpapers",me.selected);
  			cp.set("wp_st",me.stretch);
        }
        me.destroy();
    },

    onSelect: function (tree, record) {
        var me = this;

        if (record.data.img) {
            me.selected = 'static/css/img/wallpapers/' + record.data.img;
        } else {
            me.selected = Ext.BLANK_IMAGE_URL;
        }

        me.preview.setWallpaper(me.selected);
    },

    setInitialSelection: function () {
        var s = this.desktop.getWallpaper();
        if (s) {
            var path = 'static/css/img/wallpapers/' + this.getTextOfWallpaper(s);
            this.tree.selectPath(path, 'text');
        }
    }
});
