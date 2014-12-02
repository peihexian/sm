/**
 * <p>
 * 商品库存信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.productstock.ProductStock_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.productstock.ProductStock_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.ProductStock_List',
	store : 'ProductStock',
	layout: {
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		var productCode_store = Ext.create('app.store.Product',{
			pageSize : 1000,
			autoLoad:true
		});
		var productCode_combobox = Ext.create('Ext.form.ComboBox',{
			name:'productCode',
			editable: false,
			forceSelection: true,
			labelAlign:'left',
			fieldLabel:'商品编码',
			store:productCode_store,
			queryMode:'local',
			displayField:'productName',
			valueField:'productCode',
			allowBlank:false,
			emptyText : '请选择'
		});
		Ext.applyIf(me, {
			tbar : [productCode_combobox,,
				{
				text : '查询',
				action : 'query',
				iconCls : 'add-btn-icon'
			}],
			items: [
				{
					xtype: 'gridpanel',
					region: 'center',
					selType: 'rowmodel',
					store : 'ProductStock',
					columnLines : true,
					forceFit : true,
					width: '100%',
					height:'100%',
					defaults: {
						flex: 1,
						align:'center'
					},					
					columns: [
						{
							text: '商品',
							dataIndex:'product.productName'
							
							
						},
						{
							text: '加权平均价',
							dataIndex:'avgPrice'
							
							
						},
						{
							text: '库存数量',
							dataIndex:'num'
							
							
						},{
							text:'库存成本小计',
							renderer: function(val,params, data) {
								var percentage = (data.raw.num*data.raw.avgPrice);
								return percentage.toString() + '元';
							}
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'ProductStock',
						dock: 'bottom',
						displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
						emptyMsg: "没有数据",
						afterPageText: "页  共{0}页",
						beforePageText: "第",
						displayInfo: true
					}]
				}
			]
		});
		me.callParent(arguments);
	}
});