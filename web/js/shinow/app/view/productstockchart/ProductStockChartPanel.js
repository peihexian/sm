
Ext.define('app.view.productstockchart.ProductStockChartPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProductStockChartPanel',
    store: 'ProductStock',
    layout: {
        type: 'border'
    },
    initComponent: function () {
        var me = this;
        var productCode_store = Ext.create('app.store.Product', {
            pageSize: 1000,
            autoLoad: true
        });
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    store: 'ProductStock',
                    width: '100%',
                    height: '100%'
                }
            ]
        });
        me.callParent(arguments);
    }
});