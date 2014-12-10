/**
 * <p>
 * 入库明细信息表
 * </p>
 *
 * @author 代码生成器
 * @class app.model.InStockDetail
 * @extends Ext.data.Model
 */
Ext.define('app.model.InStockDetail', {
    extend: 'Ext.data.Model',
    alias: 'model.InStockDetail',
    idProperty: 'inStockDetailId',
    fields: [
        {
            name: 'inStockDetailId',
            type: 'int'
        },
        {
            name: 'inStockId',
            type: 'int'
        },
        {
            name: 'productCode',
            type: 'string'
        },
        {
            name: 'num',
            type: 'int'
        },
        {
            name: 'price',
            type: 'string'
        },
        {
            name: 'productName',
            type: 'string'
        }

    ]
});