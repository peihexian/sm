// Very simple plugin for adding a close context menu to tabs
Ext.ux.TabCloseMenu = function () {
    var tabs, menu, ctxItem;
    this.init = function (tp) {
        tabs = tp;
        tabs.on('contextmenu', onContextMenu);
    }

    function onContextMenu(ts, item, e) {
        if (!menu) { // create context menu on first right click
            menu = new Ext.menu.Menu([{
                id: tabs.id + '-close',
                text: '关闭当前页',
                handler: function () {
                    tabs.remove(ctxItem);
                }
            }, {
                id: tabs.id + '-close-others',
                text: '关闭其他页',
                handler: function () {
                    tabs.items.each(function (item) {
                        if (item.closable && item != ctxItem) {
                            tabs.remove(item);
                        }
                    });
                }
            }]);
        }
        ctxItem = item;
        for (var x = menu.items.length - 1; x >= 2; x--) {
            menu.remove(menu.items.get(x));
        }
        menu.addSeparator();
        var x = -1;
        var items = menu.items;
        tabs.items.each(function (current, index, length) {
            menu.add(
                new Ext.menu.CheckItem({
                    group: 'tabs',
                    text: this.title,
                    tabIndex: index,
                    checked: this == tabs.getActiveTab(),
                    handler: function () {
                        tabs.activate(tabs.items.get(this.tabIndex));
                    }
                })
            );
        });
        items.get(tabs.id + '-close').setDisabled(!item.closable);
        var disableOthers = true;
        tabs.items.each(function () {
            if (this != item && this.closable) {
                disableOthers = false;
                return false;
            }
        });
        items.get(tabs.id + '-close-others').setDisabled(disableOthers);

        menu.showAt(e.getPoint());
    }
};
