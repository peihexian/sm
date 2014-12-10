
Ext.define('app.controller.ProductStockChart', {
        extend: 'Ext.app.Controller',
        alias: 'controller.ProductStockChart',
        requires: ['app.model.ProductStock', 'app.store.ProductStock'],
        models: ['ProductStock'],
        views: ['productstockchart.ProductStockChartPanel'],
        stores: ['ProductStock'],
        refs: [
            {
                ref: 'productstock_chart_panel',
                selector: 'ProductStockChartPanel'
            }
        ],
        init: function (application) {
            var me = this;
            me.control({
                'ProductStockChartPanel': {
                    render: me.loadChartData
                }
            });
        },
        loadChartData: function () {
        }
    }
);