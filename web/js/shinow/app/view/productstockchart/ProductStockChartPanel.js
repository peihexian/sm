
Ext.define('app.view.productstockchart.ProductStockChartPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProductStockChartPanel',
    requires:['app.view.main.Main_Pie_Chart', 'app.view.main.Main_Column_Chart'],
    store: 'ProductStock',
    border:false,
    layout: {
        type: 'border'
    },
    initComponent: function () {
        var me = this;
        var chart_data_store = Ext.create('app.store.StockChartPieStore');
        Ext.applyIf(me, {
            items: [
                {
                    region: 'center',
                    xtype: 'panel',
                    layout:'column',
                    items:[
                        {
                            columnWidth : .5,
                            border:false,
                            xtype:'panel',
                            layout:'vbox',
                            items:[
                                {
                                    xtype: 'main_pie_chart',
                                    chart_store: chart_data_store
                                }
                                ,
                                {
                                    xtype: 'main_column_chart',
                                    chart_store: chart_data_store
                                }
                            ]

                        },
                        {
                            columnWidth : .5,
                            border:false,
                            xtype:'panel'
                        }

                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});