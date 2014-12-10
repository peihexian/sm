
 Ext.define('app.view.main.Main_Pie_Chart', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.main_pie_chart',
	chart_store:null,
	layout: {
		type: 'fit'
	},
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			title:'库存商品成本分布饼图',
			items:[
				{
					xtype:'chart',
					animate: true,
					store:me.chart_store,
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
								//var total = 0;
								//storeItem.each(function(rec) {
								//    total += rec.get('data1');
								//});
								//this.setTitle(storeItem.get('product_name') + ': ' + Math.round(storeItem.get('data1') / total * 100) + '%');
								this.setTitle(storeItem.get('product_name') + ': ' +storeItem.get('data1')+'元库存成本');
							}
						},
						highlight: {
							segment: {
								margin: 20
							}
						},
						label: {
							field: 'product_name',
							display: 'rotate',
							contrast: true,
							font: '18px Arial'
						}
					}]
				}
			]
		});
		me.callParent(arguments);
	}
});