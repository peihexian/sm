Ext.define('app.model.SysLog', {
    extend: 'Ext.data.Model',
    alias: 'model.SysLog',
    fields: [
        {
            name: 'log_id',
            type: 'int'
        },
        {
            name: 'user_name',
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
            type: 'datetime'
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