Ext.define('app.model.SysLog', {
    extend: 'Ext.data.Model',
    alias: 'model.SysLog',
    fields: [
        {
            name: 'log_id',
            type: 'int'
        },
        {
            name: 'login_name',
            type: 'string'
        }
        ,
        {
            name: 'menu_name',
            type: 'string'
        }
        ,
        {
            name: 'log_time',
            type: 'date',
            format: 'Y-m-d H:i:s'

        }
        ,
        {
            name: 'ip',
            type: 'string'
        }
        ,
        {
            name: 'content',
            type: 'string'

        }
    ]
});