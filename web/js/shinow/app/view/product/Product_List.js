/**
 * <p>
 * 商品信息表 主列表view
 * </p>
 * 
 * @author 代码生成器
 * @class app.view.product.Product_List
 * @extends Ext.panel.Panel
 */
 
 Ext.define('app.view.product.Product_List', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.Product_List',
	store : 'Product',
	layout: {
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			tbar : [{
				text : '新增',
				action : 'add',
				iconCls : 'add-btn-icon'
			},'-',{
				text : '修改',
				action : 'edit',
				iconCls : 'edit-btn-icon'
			} ,'-',{
				text : '删除',
				action : 'del',
				iconCls : 'del-btn-icon'
			}],
			items: [
				{
					xtype: 'gridpanel',
					region: 'center',
					selType: 'rowmodel',
					store : 'Product',
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
							text: '商品编码',
							dataIndex:'productCode'
							
							
						},
						{
							text: '商品类别编码',
							dataIndex:'typeCode'
							
							
						},
						{
							text: '商品单位分类id',
							dataIndex:'unitId'
							
							
						},
						{
							text: '促销状态编码',
							dataIndex:'statusId'
							
							
						},
						{
							text: '商品名称',
							dataIndex:'productName'
							
							
						},
						{
							text: '商品助记码',
							dataIndex:'productNameAb'
							
							
						},
						{
							text: '商品价格',
							dataIndex:'price'
							
							
						},
						{
							text: '可售状态',
							dataIndex:'valid'
							
							
						},
						{
							text: '规格',
							dataIndex:'spec'
							
							
						},
						{
							text: '描述',
							dataIndex:'describeTxt'
							
							
						},
						{
							text: '图片',
							dataIndex:'picPath'
							
							
						},
						{
							text: '点击数',
							dataIndex:'clickCount'
							
							
						},
						{
							text: '备注',
							dataIndex:'memo'
							
							
						}
					],
					dockedItems: [{
						xtype: 'pagingtoolbar',
						store: 'Product',
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