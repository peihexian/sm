/**
 * <p>
 * 入库信息表 新增数据window
 * </p>
 *
 * @author 代码生成器
 * @class app.view.instock.InStock_Add
 * @extends Ext.panel.Panel
 */

Ext.define('app.view.instock.InStock_Add', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.InStock_Add',
    layout: 'border',
    width: 400,
    height: 275,
    border: false,
    buttonAlign: 'center',
    initComponent: function () {
        var me = this;
        var providerCode_store = Ext.create('app.store.Provider', {
            pageSize: 1000,
            autoLoad: true
        });
        var userId_store = Ext.create('app.store.SysUser', {
            pageSize: 1000,
            autoLoad: true
        });
        Ext.applyIf(me, {
            items: [
                {
                    region: "north",
                    xtype: 'form',
                    defaultType: 'textfield',
                    labelAlign: 'right',
                    border:false,
                    buttonAlign: 'center',
                    defaults: {
                        allowBlank: false,
                        autowidth: true,
                        margin:'5 5 5 5',
                        labelAlign: 'right',
                        height: 20,
                        width: 299
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            maxLength: 6,
                            name: 'providerCode',
                            editable: false,
                            forceSelection: true,
                            labelAlign: 'right',
                            fieldLabel: '供应商',
                            store: providerCode_store,
                            queryMode: 'local',
                            displayField: 'providerName',
                            valueField: 'providerCode',
                            allowBlank: false,
                            emptyText: '请选择'
                        },
                        {
                            xtype:'combobox',
                            name: 'userId',
                            editable: false,
                            forceSelection: true,
                            labelAlign: 'right',
                            fieldLabel: '入库用户',
                            store: userId_store,
                            queryMode: 'local',
                            displayField: 'realName',
                            valueField: 'userId',
                            allowBlank: false,
                            emptyText: '请选择'
                        },

                        {
                            name: 'inType',
                            fieldLabel: '入库方式'
                        },

                        {
                            name: 'inTime',
                            fieldLabel: '入库时间'
                        },

                        {
                            maxLength: 20,
                            name: 'handlerName',
                            maxLengthText: '经手人不能多于20个字符',
                            fieldLabel: '经手人'
                        },

                        {
                            name: 'totalMoney',
                            fieldLabel: '入库金额'
                        },

                        {
                            maxLength: 150,
                            name: 'memo',
                            maxLengthText: '备注不能多于150个字符',
                            fieldLabel: '备注'
                        }
                    ]
                }
            ]
            ,
            buttons: [
                {
                    text: '保存',
                    action: 'save'
                },
                {
                    text: '关闭',
                    scope: this,
                    handler: function (btn) {
                        btn.up('window').close();
                    }
                }
            ]
        });

        this.callParent(arguments);
    }
});