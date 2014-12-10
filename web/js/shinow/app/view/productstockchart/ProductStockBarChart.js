
 Ext.define('app.view.productstockchart.ProductStockBarChart', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.product_stock_bar_chart',
	chart_store:null,
	layout: {
		type: 'fit'
	},
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			title:'库存商品成本前10分布图',
			items:[
				{
					xtype:'chart',
					animate: true,
					store:me.chart_store,
					shadow: true,
					axes: [{
						type: 'Numeric',
						position: 'bottom',
						fields: ['data1'],
						label: {
							renderer: Ext.util.Format.numberRenderer('0,0')
						},
						title: '库存成本统计',
						grid: true,
						minimum: 0
					}, {
						type: 'Category',
						position: 'left',
						fields: ['product_name'],
						title: '商品类型'
					}],
					background: {
						gradient: {
							id: 'backgroundGradient',
							angle: 45,
							stops: {
								0: {
									color: '#ffffff'
								},
								100: {
									color: '#eaf1f8'
								}
							}
						}
					},
					series: [{
						type: 'bar',
						axis: 'bottom',
						highlight: true,
						tips: {
							trackMouse: true,
							width: 140,
							height: 28,
							renderer: function(storeItem, item) {
								this.setTitle(storeItem.get('product_name') + ': ' + storeItem.get('data1') + ' 元');
							}
						},
						label: {
							display: 'insideEnd',
							field: 'data1',
							renderer: Ext.util.Format.numberRenderer('0'),
							orientation: 'horizontal',
							color: '#333',
							'text-anchor': 'middle'
						},
						xField: 'product_name',
						yField: ['data1'],
						renderer: function(sprite, record, attr, index, store) {
							var fieldValue = Math.random() * 20 + 10;
							var value = (record.get('data1') >> 0) % 5;
							var color = ['rgb(213, 70, 121)',
								'rgb(44, 153, 201)',
								'rgb(146, 6, 157)',
								'rgb(49, 149, 0)',
								'rgb(249, 153, 0)'][value];
							return Ext.apply(attr, {
								fill: color
							});
						}
					}]
				}
			]
		});
		me.callParent(arguments);
	}
});