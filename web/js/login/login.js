Ext.onReady(function () {
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';
    //以下自定义一个vtype输入校验规则
    Ext.apply(Ext.form.field.VTypes, {
        //使用正则表达式
        validcode: function (value, field) {
            var regEx = /^\d{4}$/; //4位数字
            return regEx.test(value);
        },
        validcodeText: "请输入正确的验证码",
        validcodeMask: /[0-9-]/  //限制键盘的输入
    });

    //读取cookie中记录的最后一次登录名称
    var cp = new Ext.state.CookieProvider();
    Ext.state.Manager.setProvider(cp);
    var last_loginUsername = cp.get("loginName");

    //加载css主题样式
    var css = cp.get('color');
    if ((null == css) || (undefined == css)) {
        css = "ext-all.css";
    }
    Ext.util.CSS.swapStyleSheet(
        'theme',
        GLOBAL_ROOT_PATH+ '/static/js/extjs/resources/css/' + css
    );

    var login_form = new Ext.create('Ext.form.FormPanel', {
        bodyStyle: 'padding-top:20px;padding-left:20px;',
        defaultType: 'textfield',
        labelAlign: 'right',
        width: 'auto',
        height: 150,
        frame: false,
        border:false,
        buttonAlign: 'center',
        defaults: {
            allowBlank: false,
            autowidth: true,
            labelAlign: 'right',
            width: 210,
            vtype: 'alphanum' //缺省只能输入字母和数字
        },
        items: [
            {
                fieldLabel: '登录名称  ',
                id: 'loginName',
                name: 'loginName',
                height: 20,
                maxLength: 30,
                value: last_loginUsername,
                blankText: '请输入登录名称',
                maxLengthText: '登录名称不能多于30个字符'
            },
            {
                fieldLabel: '登录密码  ',
                id: 'loginPass',
                name: 'loginPass',
                inputType: 'password',
                height: 20,
                maxLength: 40,
                blankText: '请输入登录密码',
                maxLengthText: '密码不能多于40个字符'
            },
            {
                fieldLabel: '校验码  ', id: 'validCode', name: 'validCode', vtype: 'validcode',
                width: 146, height: 20, blankText: '请输入校验码', minLength: 4, maxLength: 4,
                minLengthText: '校验码不能少于4个', maxLengthText: '校验码不能多于4个数字',
                listeners: {
                    specialkey: function (field, e) {
                        if (e.getKey() == Ext.EventObject.ENTER) {//回车自动提交
                            document.getElementById("loginBtn").click();
                        }
                    }
                }
            }
        ],
        buttons: [
            {
                xtype: 'button', text: '重输', handler: function () {
                this.up("form").getForm().reset();
            }
            },
            {
                xtype: 'button', id: 'loginBtn', text: '登录', handler: function () {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    //记录cookie value
                    var data = form.getValues();
                    cp.set("loginName", data.loginName);

                    form.submit({
                        url: GLOBAL_ROOT_PATH + '/login/checklogin',
                        waitTitle: '提示',//标题
                        method:'post',
                        waitMsg: '正在提交数据请稍候...',//提示信息
                        success: function (form, action) {
                            if (action.result.status==true){
                                window.location.href = action.result.main_url;
                            }else{
                                Ext.Msg.alert('错误', action.result.msg);
                            }
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('错误', action.result.msg, function () {
                                form.findField('loginPass').setValue('');
                                form.findField('validCode').setValue('');
                                form.findField('loginPass').focus(false, 100);
                                Ext.fly('checkimg').dom.src = GLOBAL_ROOT_PATH + '/validcode.jsp?id=' + new Date().getTime();
                            });
                        }
                    });
                }
            }
            }
        ]
    });

    var login_window = new Ext.create('Ext.window.Window', {
        title: '用 户 登 录',
        width: 300,
        collapsible: false,
        closable: false,
        resizable: false,
        modal: true,
        draggable: false,
        shadow: true,
        frame:false,
        items: [
            login_form
        ]
    });

    login_window.show();
    //创建验证码
    Ext.core.DomHelper.insertAfter(Ext.get('validCode'), {
        tag: 'img',
        id: 'checkimg',
        name: 'checkimg',
        src: GLOBAL_ROOT_PATH + '/validcode.jsp?id=' + new Date().getTime(),
        align: 'absbottom',
        style: 'position: absolute;left: 170px;top: 70px; '
    });
    Ext.get('checkimg').on({
        'click': {
            fn: function () {
                this.src = GLOBAL_ROOT_PATH + '/validcode.jsp?id=' + new Date().getTime();
            }
        }
    });

    //浏览器窗口大小发生变化时，让弹出的窗体自动居中
    Ext.EventManager.onWindowResize(function () {
        if (login_window) {
            login_window.center();
        }
    });
});