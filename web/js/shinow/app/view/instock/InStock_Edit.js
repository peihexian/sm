Ext.define('app.view.instock.InStock_Edit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.InStock_Edit',
    requires: ['Ext.ux.DateTimeField', 'app.model.InStockDetail'],
    layout: 'border',
    width: 650,
    height: 470,
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

        var productCode_store = Ext.create('app.store.Product', {
            pageSize: 1000,
            autoLoad: true
        });

        var details_store = Ext.create('Ext.data.Store', {
            autoLoad: false,
            model: 'app.model.InStockDetail',
            data: [],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json'
                }
            }
        });

        Ext.apply(Ext.form.field.VTypes, {
            //使用正则表达式
            floatonly: function (value, field) {
                var regEx = /(^[-+]?\d\d*\.\d*$)|(^[-+]?\d\d*$)|(^[-+]?\.\d\d*$)/; //浮点数
                return regEx.test(value);
            },
            floatonlyText: "请输入正确的浮点数",
            floatonlyMask: /[+\-\.0-9]/  //限制键盘的输入
        });


        Ext.applyIf(me, {
            items: [
                {
                    region: "north",
                    xtype: 'panel',
                    border: false,
                    height: 200,
                    layout: 'border',
                    items: [
                        {
                            region: "north",
                            xtype: 'form',
                            layout: 'form',
                            height: 140,
                            border: false,
                            items: [
                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            name: 'inStockId',
                                            xtype: 'hiddenfield'
                                        },
                                        {
                                            columnWidth: .5,
                                            xtype: 'combobox',
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
                                            height: 20,
                                            width: 299,
                                            emptyText: '请选择'
                                        },
                                        {
                                            columnWidth: .5,
                                            xtype: 'combobox',
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
                                            height: 20,
                                            width: 299,
                                            emptyText: '请选择'
                                        }

                                    ]
                                }

                                ,
                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaultType: 'textfield',
                                    labelAlign: 'right',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            columnWidth: .5,
                                            xtype: 'combobox',
                                            name: 'inType',
                                            fieldLabel: '入库方式',
                                            forceSelection: true,
                                            emptyText: "请选择",
                                            store: new Ext.data.SimpleStore({
                                                fields: ['key', 'value'],
                                                data: [
                                                    [1, '正常入库'],
                                                    [2, '报溢入库'],
                                                    [3, '盘盈入库']
                                                ]
                                            }),
                                            displayField: "value",
                                            valueField: "key",
                                            mode: "local"
                                        },

                                        {
                                            xtype: 'datetimefield',
                                            columnWidth: .5,
                                            name: 'inTime',
                                            fieldLabel: '入库时间'
                                        }
                                    ]
                                }
                                ,

                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaultType: 'textfield',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            columnWidth: .5,
                                            maxLength: 20,
                                            name: 'handlerName',
                                            maxLengthText: '经手人不能多于20个字符',
                                            fieldLabel: '经手人'
                                        },

                                        {
                                            columnWidth: .5,
                                            name: 'totalMoney',
                                            id: 'in_stock_edit_top_pnl_total_money_textfield',
                                            vtype: 'floatonly',
                                            fieldLabel: '入库金额'
                                        }
                                    ]
                                }
                                ,

                                {
                                    xtype: 'panel',
                                    border: false,
                                    layout: 'column',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 0 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            columnWidth: 1,
                                            xtype: 'textfield',
                                            allowBlank: false,
                                            margin: '5 5 5 5',
                                            labelAlign: 'right',
                                            maxLength: 150,
                                            name: 'memo',
                                            maxLengthText: '备注不能多于150个字符',
                                            fieldLabel: '备注'
                                        }

                                    ]
                                }
                            ]

                        }
                        ,
                        {
                            region: "center",
                            xtype: 'form',
                            layout: 'fit',
                            border: false,
                            id: 'in_stock_edit_form_input',
                            items: [

                                {
                                    xtype: 'panel',
                                    layout: 'hbox',
                                    title: '明细信息编辑',
                                    defaults: {
                                        allowBlank: false,
                                        margin: '5 5 5 5',
                                        labelAlign: 'right'
                                    },
                                    items: [
                                        {
                                            flex: 1.5,
                                            xtype: 'combobox',
                                            name: 'productCode',
                                            editable: false,
                                            forceSelection: true,
                                            id: 'in_stock_add_product_code_combobox',
                                            labelAlign: 'right',
                                            fieldLabel: '商品',
                                            labelWidth: 30,
                                            store: productCode_store,
                                            queryMode: 'local',
                                            displayField: 'productName',
                                            valueField: 'productCode',
                                            allowBlank: false,
                                            height: 20,
                                            width: 299,
                                            emptyText: '请选择'
                                        }
                                        ,
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            id: 'in_stock_add_input_num',
                                            name: 'num',
                                            labelWidth: 30,
                                            height: 20,
                                            width: 100,
                                            vtype: 'floatonly',
                                            fieldLabel: '数量'
                                        },

                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            id: 'in_stock_add_input_price',
                                            name: 'price',
                                            labelWidth: 30,
                                            height: 20,
                                            width: 100,
                                            vtype: 'floatonly',
                                            fieldLabel: '进价'
                                        }
                                        ,
                                        {
                                            flex: 0.5,
                                            xtype: 'button',
                                            id: 'in_stock_add_input_btn_save',
                                            text: '新增',
                                            handler: function () {
                                                //取编辑form
                                                var form = Ext.getCmp('in_stock_edit_form_input').getForm();

                                                if (!form.isValid()) {
                                                    return;
                                                }
                                                var _record = null;
                                                if (Ext.getCmp('in_stock_add_input_btn_save').getText() == '新增') {
                                                    //生成新record
                                                    _record = Ext.create('app.model.InStockDetail', {});

                                                    //复制form输入框数据到record里面
                                                    Ext.apply(_record.data, form.getValues());

                                                    //复制产品名称
                                                    _record.data.productName = form.findField('productCode').rawValue;

                                                    //向gridpanel对应的store里面加入新数据
                                                    Ext.getCmp('in_stock_edit_detail_gridpanel').getStore().add(_record);

                                                } else {
                                                    //修改数据时
                                                    _record = form.getRecord();
                                                    //复制form输入框数据到record里面
                                                    Ext.apply(_record.data, form.getValues());

                                                    //复制产品名称
                                                    _record.data.productName = form.findField('productCode').rawValue;

                                                    //刷新grid界面
                                                    Ext.getCmp('in_stock_edit_detail_gridpanel').getView().refresh();

                                                }

                                                me.calcTotalMoney();
                                                Ext.getCmp('in_stock_add_input_btn_save').setText('新增');
                                                Ext.getCmp('in_stock_edit_form_input').getForm().reset();
                                            }
                                        }
                                        ,
                                        {
                                            flex: 0.5,
                                            xtype: 'button',
                                            text: '重输',
                                            handler: function () {
                                                Ext.getCmp('in_stock_edit_form_input').getForm().reset();
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
                ,
                {

                    region: 'center',
                    xtype: 'gridpanel',
                    id: 'in_stock_edit_detail_gridpanel',
                    width: 310,
                    border: false,
                    columnLines: true,
                    store: details_store,
                    title: '入库明细信息',
                    columns: [
                        {
                            text: '商品',
                            dataIndex: 'productName'
                        },
                        {
                            text: '数量',
                            dataIndex: 'num'
                        },
                        {
                            text: '进价',
                            dataIndex: 'price'
                        },
                        {
                            xtype: 'actioncolumn',
                            text: '编辑',
                            width: 50,
                            items: [{
                                margin: '0 5 0 5',
                                icon: GLOBAL_ROOT_PATH + '/static/css/img/edit.png',
                                tooltip: '编辑',
                                handler: function (grid, rowIndex, colIndex) {
                                    var form = Ext.getCmp('in_stock_edit_form_input').getForm();
                                    var rec = grid.getStore().getAt(rowIndex);
                                    Ext.getCmp('in_stock_add_input_btn_save').setText('修改');
                                    form.loadRecord(rec);
                                    //alert("Edit " + rec.get('productName'));
                                }

                            }]
                        }
                        ,
                        {

                            xtype: 'actioncolumn',
                            text: '删除',
                            width: 50,
                            items: [{
                                margin: '0 5 0 5',
                                icon: GLOBAL_ROOT_PATH + '/static/css/img/delete.gif',
                                tooltip: '删除',
                                handler: function (grid, rowIndex, colIndex) {
                                    Ext.MessageBox.confirm("提示", "您确定要删除这些信息吗?", function (button, text) {
                                        if (button == 'yes') {
                                            grid.getStore().removeAt(rowIndex);
                                            Ext.getCmp('in_stock_edit_detail_gridpanel').getView().refresh();
                                            me.calcTotalMoney();
                                            //var rec = grid.getStore().getAt(rowIndex);
                                            //alert("Terminate " + rec.get('productName'));
                                        }
                                    });
                                }
                            }]
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
    ,
    calcTotalMoney: function () {
        var me = this;
        var count = 0;
        Ext.each(Ext.getCmp('in_stock_edit_detail_gridpanel').getStore().data.items, function (node, index) {
            count = count + node.data.num * node.data.price;
        });
        Ext.getCmp('in_stock_edit_top_pnl_total_money_textfield').setValue(count);
    }
});