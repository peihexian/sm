/**
 * <p>
 * 商品库存信息表 controller
 * </p>
 *
 * @author 代码生成器
 * @class app.controller.ProductStock
 * @extends Ext.app.Controller
 */
Ext.define('app.controller.ProductStock', {
        extend: 'Ext.app.Controller',
        alias: 'controller.ProductStock',
        requires: ['app.model.ProductStock', 'app.store.ProductStock', 'app.view.productstock.ProductStock_List', 'app.view.productstock.ProductStock_Add', 'app.view.productstock.ProductStock_Edit'],
        models: ['ProductStock'],
        views: ['productstock.ProductStock_List', 'productstock.ProductStock_Add', 'productstock.ProductStock_Edit'],
        stores: ['ProductStock'],
        refs: [
            {
                ref: 'productstock_gridpanel',
                selector: 'ProductStock_List>gridpanel'
            }
        ],
        init: function (application) {
            var me = this;
            me.control({
                'ProductStock_List>gridpanel': {
                    render: this.loadDefaultListData
                },
                'ProductStock_List>toolbar button[action=query]': {
                    click: this.query
                }
            });
        },
        loadDefaultListData: function (obj) {
            var store = obj.getStore();
            store.on('beforeload', function () {
                var proxy = store.getProxy();
                proxy.setExtraParam('productCode', Ext.getCmp('product_stock_query_tb_product_code').getValue());
            });

            store.loadPage(1);
        },
        query: function (btn) {
            var store = btn.up('panel').down('gridpanel').getStore();
            store.loadPage(1);
        }
    }
);