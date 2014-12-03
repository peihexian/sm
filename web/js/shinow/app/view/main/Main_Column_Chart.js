Ext.define('app.view.main.Main_Column_Chart', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main_column_chart',
    chart_store: null,
    layout: {
        type: 'fit'
    },
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            title: '库存商品成本分布柱状图',
            margins: '0 5 0 5',
            items: [
                {
                    xtype: 'chart',
                    style: 'background:#fff',
                    animate: true,
                    shadow: true,
                    width: 450,
                    height: 400,
                    store: me.chart_store,
                    axes: [{
                        type: 'Numeric',
                        position: 'left',
                        fields: ['data1'],
                        label: {
                            renderer: Ext.util.Format.numberRenderer('0,0')
                        },
                        title: '库存成本(元)',
                        grid: true,
                        minimum: 0
                    }, {
                        type: 'Category',
                        position: 'bottom',
                        fields: ['product_name'],
                        title: '库存商品成本统计图'
                    }],
                    series: [{
                        type: 'column',
                        axis: 'left',
                        highlight: true,
                        tips: {
                            trackMouse: true,
                            width: 140,
                            height: 28,
                            renderer: function (storeItem, item) {
                                this.setTitle(storeItem.get('product_name') + ': ' + storeItem.get('data1') + ' $');
                            }
                        },
                        label: {
                            display: 'insideEnd',
                            'text-anchor': 'middle',
                            field: 'data1',
                            renderer: Ext.util.Format.numberRenderer('0'),
                            orientation: 'vertical',
                            color: '#333'
                        },
                        xField: 'product_name',
                        yField: 'data1'
                    }]
                }
            ]
        });
        me.callParent(arguments);
    }
});