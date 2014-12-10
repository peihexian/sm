
Ext.define('app.view.productstockchart.ProductStockChartPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProductStockChartPanel',
    requires:['app.view.main.Main_Pie_Chart', 'app.view.main.Main_Column_Chart','app.view.productstockchart.ProductStockBarChart'],
    store: 'ProductStock',
    border:false,
    layout: {
        type: 'border'
    },
    initComponent: function () {
        var me = this;
        var chart_data_store = Ext.create('app.store.StockChartPieStore');
        var _height=Ext.getCmp('content_tabpanel').getHeight();
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
                            height:_height,
                            xtype:'panel',
                            layout: {
                                type:'vbox',
                                align:'stretch'
                            },
                            defaults:{margin:'5 5 5 5'},
                            items:[
                                {
                                    xtype: 'main_column_chart',
                                    flex:1,
                                    chart_store: chart_data_store
                                }
                            ]

                        },
                        {
                            columnWidth : .5,
                            border:false,
                            height:_height,
                            xtype:'panel',
                            layout: {
                                type:'vbox',
                                align:'stretch'
                            },
                            defaults:{margin:'5 5 5 5'},
                            items:[
                                {
                                    xtype: 'product_stock_bar_chart',
                                    flex:1,
                                    chart_store: chart_data_store
                                }
                                ,
                                {
                                    xtype: 'main_pie_chart',
                                    flex:1,
                                    chart_store: chart_data_store
                                }
                            ]
                        }

                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});