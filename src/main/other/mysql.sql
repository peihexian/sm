drop table if exists delivery_info;

drop index Index_1 on in_stock;

drop table if exists in_stock;

drop index Index_1 on in_stock_detail;

drop table if exists in_stock_detail;

drop index Index_1 on member_address;

drop table if exists member_address;

drop index Index_1 on member_supply_record;

drop table if exists member_supply_record;

drop index Index_1 on order_detail;

drop table if exists order_detail;

drop table if exists order_info;

drop index Index_1 on out_stock;

drop table if exists out_stock;

drop index Index_1 on out_stock_detail;

drop table if exists out_stock_detail;

drop index Index_1 on product;

drop table if exists product;

drop table if exists product_sale_status;

drop table if exists product_stock;

drop table if exists product_type;

drop table if exists product_unit;

drop table if exists provider;

drop index Index_1 on sys_log;

drop table if exists sys_log;

drop index Index_1 on sys_menu;

drop table if exists sys_menu;

drop table if exists sys_role;

drop table if exists sys_role_to_menu;

drop index Index_1 on sys_user;

drop table if exists sys_user;

drop table if exists sys_user_role;

drop index Index_1 on web_user;

drop table if exists web_user;

/*==============================================================*/
/* Table: delivery_info                                         */
/*==============================================================*/
create table delivery_info
(
   delivery_code        varchar(3) not null comment '配送商编码',
   delivery_name        varchar(50) not null comment '配送商名称',
   address              varchar(150) not null comment '地址',
   link_name            varchar(20) comment '联系人',
   link_tel             varchar(20) comment '联系电话',
   qq                   varchar(50) comment 'QQ',
   email                varchar(50) comment 'Email',
   sort_id              tinyint comment '排序编码',
   status               bool default 1 comment '状态',
   primary key (delivery_code),
   key AK_Key_2 (delivery_name)
);

alter table delivery_info comment '配送商信息表';

insert into delivery_info(delivery_code,delivery_name,address,link_name,link_tel,qq,email,sort_id,status) values('001','顺丰速递唐山分公司','火炬路xx号','小赵','4008111111','400811',null,1,1);
insert into delivery_info(delivery_code,delivery_name,address,link_name,link_tel,qq,email,sort_id,status) values('002','申通速递唐山分公司','建设路128号','小李','123456',null,null,1,1);
insert into delivery_info(delivery_code,delivery_name,address,link_name,link_tel,qq,email,sort_id,status) values('003','圆通速递','新华道1号','张女士','888888',null,null,1,1);

/*==============================================================*/
/* Table: in_stock                                              */
/*==============================================================*/
create table in_stock
(
   in_stock_id          int not null auto_increment comment '入库单号',
   provider_code        varchar(6) comment '供应商编码',
   user_id              int comment '操作员编码',
   in_type              tinyint default 1 comment '入库方式',
   in_time              datetime not null comment '入库时间',
   handler_name         varchar(20) not null comment '经手人',
   total_money          float(8,2) comment '金额',
   memo                 varchar(150) comment '备注',
   primary key (in_stock_id)
);

alter table in_stock comment '入库信息表';

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on in_stock
(
   in_time
);

/*==============================================================*/
/* Table: in_stock_detail                                       */
/*==============================================================*/
create table in_stock_detail
(
   in_stock_detail_id   int not null auto_increment comment '递增的流水号',
   in_stock_id          int comment '入库单号',
   product_code         varchar(20) comment '商品编码',
   num                  int not null comment '入库数量',
   price                float(8,2) not null comment '进价',
   primary key (in_stock_detail_id)
);

alter table in_stock_detail comment '入库明细信息表';

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on in_stock_detail
(
   in_stock_id
);

/*==============================================================*/
/* Table: member_address                                        */
/*==============================================================*/
create table member_address
(
   id                   int not null auto_increment comment '递增的流水号',
   user_name            varchar(20) comment '用户名',
   recv_man             varchar(20) not null comment '收货人姓名',
   tel                  varchar(20) not null comment '电话',
   recv_address         varchar(150) not null comment '货物的配送地址',
   post_code            varchar(6) not null comment '邮编',
   default_addr         bool default 0,
   primary key (id)
);

alter table member_address comment '会员收货地址信息表';

insert into member_address(user_name,recv_man,tel,recv_address,post_code,default_addr) values('user1','张老师','0315-3855310','河北省唐山市高新技术开发区火炬路122启奥实训基地','063020',1);
insert into member_address(user_name,recv_man,tel,recv_address,post_code,default_addr) values('user1','李工','0315-3855312','河北省唐山市高新技术开发区创业大厦5层启奥科技','063020',0);

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on member_address
(
   user_name
);

/*==============================================================*/
/* Table: member_supply_record                                  */
/*==============================================================*/
create table member_supply_record
(
   id                   int not null auto_increment comment '递增的流水号',
   user_name            varchar(20) comment '用户名',
   pay_account_id       varchar(19) not null comment '付款账号',
   pay_bank             varchar(50) not null comment '付款开户行',
   recv_account_id      varchar(19) not null comment '收款账号',
   recv_bank            varchar(50) not null comment '收款开户行',
   remark               varchar(50) comment '备注',
   total_money          float(8,2) not null comment '金额',
   supply_time          datetime comment '充值时间',
   primary key (id)
);

alter table member_supply_record comment '会员充值提现信息表';

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on member_supply_record
(
   user_name
);

/*==============================================================*/
/* Table: order_detail                                          */
/*==============================================================*/
create table order_detail
(
   id                   int not null auto_increment comment '递增的流水号',
   product_code         varchar(20) comment '商品编码',
   bill_code            int comment '订单号',
   num                  int comment '数量',
   price                float(8,2) comment '售价',
   primary key (id)
);

alter table order_detail comment '入库明细信息表';

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on order_detail
(
   bill_code
);

/*==============================================================*/
/* Table: order_info                                            */
/*==============================================================*/
create table order_info
(
   bill_code            int not null auto_increment comment '订单号',
   delivery_code        varchar(3) comment '配送商编码',
   out_stock_id         int comment '出库单号',
   user_name            varchar(20) comment '用户名',
   user_id              int comment '操作员编码',
   post_bill_code       varchar(20) comment '快递单号',
   bill_status          tinyint not null default 1 comment '订单状态',
   order_time           datetime comment '订购时间',
   recv_name            varchar(20) not null comment '收货人姓名',
   link_tel             varchar(20) not null comment '联系电话',
   recv_address         varchar(150) not null comment '配送地址',
   post_code            varchar(6) not null comment '邮编',
   total_money          float(8,2) comment '金额',
   remark               varchar(50) comment '备注',
   primary key (bill_code)
);

alter table order_info comment '订单信息表';

/*==============================================================*/
/* Table: out_stock                                             */
/*==============================================================*/
create table out_stock
(
   out_stock_id         int not null auto_increment comment '出库单号',
   user_id              int comment '操作员编码',
   out_time             datetime not null comment '出库时间',
   handler_name         varchar(20) not null comment '经手人',
   out_type             tinyint default 1 comment '出库方式',
   total_money          float(8,2) comment '出库金额',
   remark               varchar(150) comment '备注',
   primary key (out_stock_id)
);

alter table out_stock comment '出库信息表';

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on out_stock
(
   out_time
);

/*==============================================================*/
/* Table: out_stock_detail                                      */
/*==============================================================*/
create table out_stock_detail
(
   out_stock_detail_id  int not null auto_increment,
   product_code         varchar(20) comment '商品编码',
   out_stock_id         int comment '出库单号',
   num                  int comment '数量',
   sell_price           float(8,2) comment '单价',
   stock_price          float(8,2),
   primary key (out_stock_detail_id)
);

alter table out_stock_detail comment '出库明细信息表';

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on out_stock_detail
(
   product_code
);

/*==============================================================*/
/* Table: product                                               */
/*==============================================================*/
create table product
(
   product_code         varchar(20) not null comment '商品编码',
   type_code            varchar(10) comment '商品类别编码',
   unit_id              tinyint comment '单位编码',
   status_id            tinyint comment '促销状态编码',
   product_name         varchar(50) not null comment '商品名称',
   product_name_ab      varchar(25),
   price                float(8,2) not null comment '商品价格',
   valid                bool not null default 1 comment '销售状态',
   spec                 varchar(200) comment '规格',
   describe_txt         varchar(200) comment '描述',
   pic_path             varchar(100) comment '图片',
   click_count          int default 0 comment '点击数',
   memo                 varchar(100) comment '备注',
   primary key (product_code)
);

alter table product comment '商品信息表';

insert into product(product_code,unit_id,status_id,type_code,product_name,product_name_ab,price,valid,click_count) values('00001',1,1,'01','瓜子','gz',5,1,0);
insert into product(product_code,unit_id,status_id,type_code,product_name,product_name_ab,price,valid,click_count) values('00002',1,1,'01','牛肉干','nrg',15,1,0);
insert into product(product_code,unit_id,status_id,type_code,product_name,product_name_ab,price,valid,click_count) values('00003',2,1,'01','奥利奥','ala',12,1,0);
insert into product(product_code,unit_id,status_id,type_code,product_name,product_name_ab,price,valid,click_count) values('00004',1,2,'01','饼干','bg',1,1,0);

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on product
(
   product_name_ab
);

/*==============================================================*/
/* Table: product_sale_status                                   */
/*==============================================================*/
create table product_sale_status
(
   status_id            tinyint not null auto_increment comment '促销状态编码',
   status_name          varchar(20) not null comment '促销状态名称',
   status               bool comment '状态',
   memo                 varchar(50) comment '备注',
   primary key (status_id)
);

alter table product_sale_status comment '商品促销状态字典';

insert into product_sale_status(status_name,status,memo) values('不促销',1,'缺省促销状态');
insert into product_sale_status(status_name,status,memo) values('限时促销',1,'');
insert into product_sale_status(status_name,status,memo) values('临时促销',1,'');

/*==============================================================*/
/* Table: product_stock                                         */
/*==============================================================*/
create table product_stock
(
   product_code         varchar(20) not null comment '商品编码',
   avg_price            float(8,2) not null comment '加权平均价',
   num                  int not null comment '库存数量',
   primary key (product_code)
);

alter table product_stock comment '商品库存信息表';

/*==============================================================*/
/* Table: product_type                                          */
/*==============================================================*/
create table product_type
(
   type_code            varchar(10) not null comment '商品类别编码',
   type_name            varchar(50) not null comment '商品类别名称',
   sort_id              int comment '排序编码',
   status               bool default 1 comment '状态',
   primary key (type_code),
   key AK_Key_2 (type_name)
);

alter table product_type comment '商品类别信息表';

insert into product_type(type_code,type_name,sort_id,status) values('01','食品',1,1);
insert into product_type(type_code,type_name,sort_id,status) values('02','服装',2,1);
insert into product_type(type_code,type_name,sort_id,status) values('03','数码',3,1);
insert into product_type(type_code,type_name,sort_id,status) values('04','文体',4,1);
insert into product_type(type_code,type_name,sort_id,status) values('05','服务',5,1);

/*==============================================================*/
/* Table: product_unit                                          */
/*==============================================================*/
create table product_unit
(
   unit_id              tinyint not null auto_increment comment '单位编码',
   name                 varchar(20) not null comment '名称',
   status               bool comment '状态',
   memo                 varchar(50) comment '备注',
   primary key (unit_id)
);

alter table product_unit comment '商品单位字典';

insert into product_unit(name,status,memo) values('kg',1,'公斤');
insert into product_unit(name,status,memo) values('市斤',1,'');
insert into product_unit(name,status,memo) values('g',1,'克');
insert into product_unit(name,status,memo) values('件',1,'');
insert into product_unit(name,status,memo) values('次',1,'');
insert into product_unit(name,status,memo) values('尺',1,'');
insert into product_unit(name,status,memo) values('寸',1,'');
insert into product_unit(name,status,memo) values('厘米',1,'');
insert into product_unit(name,status,memo) values('毫米',1,'');
insert into product_unit(name,status,memo) values('升',1,'');
insert into product_unit(name,status,memo) values('毫升',1,'');
insert into product_unit(name,status,memo) values('吨',1,'');
insert into product_unit(name,status,memo) values('两',1,'');
insert into product_unit(name,status,memo) values('盒',1,'');
insert into product_unit(name,status,memo) values('袋',1,'');
insert into product_unit(name,status,memo) values('条',1,'');
insert into product_unit(name,status,memo) values('桶',1,'');
insert into product_unit(name,status,memo) values('罐',1,'');
insert into product_unit(name,status,memo) values('包',1,'');
insert into product_unit(name,status,memo) values('捆',1,'');
insert into product_unit(name,status,memo) values('把',1,'');
insert into product_unit(name,status,memo) values('根',1,'');
insert into product_unit(name,status,memo) values('头',1,'');
insert into product_unit(name,status,memo) values('分钟',1,'');
insert into product_unit(name,status,memo) values('小时',1,'');
insert into product_unit(name,status,memo) values('天',1,'');

/*==============================================================*/
/* Table: provider                                              */
/*==============================================================*/
create table provider
(
   provider_code        varchar(6) not null comment '供应商编码',
   provider_name        varchar(50) not null comment '供应商名称',
   provider_name_ab     varchar(25) comment '供应商助记码',
   address              varchar(200) comment '地址',
   link_name            varchar(20) comment '联系人',
   link_tel             varchar(50) comment '联系电话',
   qq                   varchar(50) comment 'QQ',
   email                varchar(50) comment 'Email',
   sort_id              int comment '排序编码',
   status               bool default 1 comment '状态',
   primary key (provider_code),
   key AK_Key_2 (provider_name)
);

alter table provider comment '供应商信息表';

insert into provider(provider_code,provider_name,provider_name_ab,address,link_name,link_tel,sort_id,status) values('000001','唐山市刘美烧鸡食品厂','TSSLMSJSPC','路南区xxx','张三','0315-12345678',1,1);
insert into provider(provider_code,provider_name,provider_name_ab,address,link_name,link_tel,sort_id,status) values('000002','唐山市翔宇食品厂','TSSXYSPC','路南区xxx路xx号','李四','13903158888',2,1);

/*==============================================================*/
/* Table: sys_log                                               */
/*==============================================================*/
create table sys_log
(
   log_id               int not null auto_increment comment '递增的流水号',
   user_id              int comment '操作员编码',
   menu_code            varchar(6) comment '菜单编码',
   log_time             datetime not null comment '日志时间',
   ip                   varchar(20) not null comment 'IP',
   content              varchar(2000) not null comment '内容',
   primary key (log_id)
);

alter table sys_log comment '系统日志信息表';

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on sys_log
(
   user_id
);

/*==============================================================*/
/* Table: sys_menu                                              */
/*==============================================================*/
create table sys_menu
(
   menu_code            varchar(6) not null comment '菜单编码',
   menu_name            varchar(50) not null comment '菜单名称',
   menu_url             varchar(100) comment 'URL地址',
   sort_id              smallint comment '排序编码',
   status               bool default 1 comment '状态',
   parent_menu_code     varchar(6),
   icon_url             varchar(100),
   permission           varchar(50),
   controller_full_classname varchar(100),
   controller_short_name varchar(100),
   default_view_classname varchar(100),
   primary key (menu_code),
   key AK_Key_2 (menu_name)
);

alter table sys_menu comment '系统菜单信息表';

insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('01','入库管理','',1,1,null,'','in_stock_sys_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0101','供应商管理','',1,1,'01','','provider_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('010101','供应商管理新增数据功能','',1,1,'0101','','provider_menu_addnew');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('010102','供应商管理编辑数据功能','',1,1,'0101','','provider_menu_edit');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('010103','供应商管理删除数据功能','',1,1,'0101','','provider_menu_del');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('010104','供应商管理查询数据功能','',1,1,'0101','','provider_menu_query');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0102','商品入库','',1,1,'01','','in_stock_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0103','采购入库统计分析','',1,1,'01','','in_stock_chart_menu');

insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('02','库存管理','',1,1,null,'','stock_sys_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0201','库存查询','',1,1,'02','','stock_query_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0202','库存商品统计分析','',1,1,'02','','stock_query_chart_menu');

insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('03','出库管理','',1,1,null,'','stock_out_sys_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0301','商品出库','',1,1,'03','','stock_out_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0302','配送商管理','',1,1,'03','','sender_menu');

insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('04','系统管理','',1,1,null,'','sys_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0401','促销状态字典','',1,1,'04','','cuxiaozhuangtai_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0402','商品类别字典','',1,1,'04','','shangpinleibei_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0403','商品单位字典','',1,1,'04','','shangpindanwei_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0404','商品信息字典','',1,1,'04','','shangpinxinxi_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0405','系统用户管理','',1,1,'04','','sys_user_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0406','系统角色管理','',1,1,'04','','sys_role_menu');
insert into sys_menu(menu_code,menu_name,menu_url,sort_id,status,parent_menu_code,icon_url,permission) values('0407','系统日志管理','',1,1,'04','','sys_log_menu');


/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on sys_menu
(
   permission
);

/*==============================================================*/
/* Table: sys_role                                              */
/*==============================================================*/
create table sys_role
(
   role_code            varchar(3) not null comment '角色编码',
   role_name            varchar(20) not null comment '角色名称',
   sort_id              smallint comment '排序编码',
   status               bool default 1 comment '状态',
   primary key (role_code),
   key AK_Key_2 (role_name)
);

alter table sys_role comment '角色信息表';

insert into sys_role(role_code,role_name,sort_id,status) values('001','超级管理员',1,1);
insert into sys_role(role_code,role_name,sort_id,status) values('002','普通管理员',1,1);
insert into sys_role(role_code,role_name,sort_id,status) values('003','普通用户',2,1);

/*==============================================================*/
/* Table: sys_role_to_menu                                      */
/*==============================================================*/
create table sys_role_to_menu
(
   role_code            varchar(3) not null comment '角色编码',
   menu_code            varchar(6) comment '菜单编码'
);

alter table sys_role_to_menu comment '角色对应菜单信息表';

insert into sys_role_to_menu (role_code,menu_code) values ('001','01');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0101');
insert into sys_role_to_menu (role_code,menu_code) values ('001','010101');
insert into sys_role_to_menu (role_code,menu_code) values ('001','010102');
insert into sys_role_to_menu (role_code,menu_code) values ('001','010103');
insert into sys_role_to_menu (role_code,menu_code) values ('001','010104');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0102');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0103');

insert into sys_role_to_menu (role_code,menu_code) values ('001','02');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0201');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0202');

insert into sys_role_to_menu (role_code,menu_code) values ('001','03');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0301');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0302');

insert into sys_role_to_menu (role_code,menu_code) values ('001','04');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0401');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0402');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0403');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0404');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0405');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0406');

insert into sys_role_to_menu (role_code,menu_code) values ('001','0407');

insert into sys_role_to_menu (role_code,menu_code) values ('003','01');

insert into sys_role_to_menu (role_code,menu_code) values ('003','0101');
insert into sys_role_to_menu (role_code,menu_code) values ('003','010101');
insert into sys_role_to_menu (role_code,menu_code) values ('003','010102');
insert into sys_role_to_menu (role_code,menu_code) values ('003','010103');
insert into sys_role_to_menu (role_code,menu_code) values ('003','010104');

insert into sys_role_to_menu (role_code,menu_code) values ('003','0102');

insert into sys_role_to_menu (role_code,menu_code) values ('003','0103');

insert into sys_role_to_menu (role_code,menu_code) values ('003','02');

insert into sys_role_to_menu (role_code,menu_code) values ('003','0201');

insert into sys_role_to_menu (role_code,menu_code) values ('003','0202');

insert into sys_role_to_menu (role_code,menu_code) values ('003','03');

insert into sys_role_to_menu (role_code,menu_code) values ('003','0301');

insert into sys_role_to_menu (role_code,menu_code) values ('003','0302');

/*==============================================================*/
/* Table: sys_user                                              */
/*==============================================================*/
create table sys_user
(
   user_id              int not null auto_increment comment '操作员编码',
   real_name            varchar(20) not null comment '操作员名称',
   login_name           varchar(40) not null,
   login_pass           varchar(40) not null comment '密码',
   address              varchar(150) comment '地址',
   link_tel             varchar(50) comment '联系电话',
   qq                   varchar(50) comment 'QQ',
   email                varchar(50) comment 'Email',
   mobile               varchar(20) comment '手机号码',
   sort_id              smallint comment '排序编码',
   status               bool default 0 comment '状态',
   primary key (user_id),
   key AK_Key_2 (real_name)
);

alter table sys_user comment '系统用户信息表';

insert into sys_user(real_name,login_name,login_pass,address,link_tel,qq,email,mobile,sort_id,status) values('管理员','admin','91183e1cb4e46961f86a2ef6287927ad','未提供','03155068351','20155031','20155031@qq.com','1551196xx95',1,1);
insert into sys_user(real_name,login_name,login_pass,address,link_tel,qq,email,mobile,sort_id,status) values('业务员','user01','b4f18779ed63a8a3259f8de6f5682cc3','未提供','03155068351','20155031','20155031@qq.com','1551196xx95',1,1);

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create unique index Index_1 on sys_user
(
   login_name
);

/*==============================================================*/
/* Table: sys_user_role                                         */
/*==============================================================*/
create table sys_user_role
(
   user_id              int comment '操作员编码',
   role_code            varchar(3) comment '角色编码'
);

alter table sys_user_role comment '系统用户对应角色表';

insert into sys_user_role(user_id,role_code) values (1,'001');
insert into sys_user_role(user_id,role_code) values (2,'003');

/*==============================================================*/
/* Table: web_user                                              */
/*==============================================================*/
create table web_user
(
   user_name            varchar(20) not null comment '用户名',
   user_pass            varchar(20) not null comment '密码',
   email                varchar(50) not null comment 'Email',
   real_name            varchar(20) not null comment '姓名',
   balance              float(8,2) not null default 0 comment '余额',
   status               bool default 0 comment '状态',
   reg_date             datetime comment '注册日期',
   active_date          datetime comment '激活日期',
   remark               varchar(100),
   primary key (user_name),
   check (Balance>=0)
);

alter table web_user comment '会员信息表';

insert into web_user(user_name,user_pass,email,real_name,balance,status,reg_date,active_date,remark) values('user1','123456','user1@shinowit.com','测试用户1',1000.00,1,'2014-01-01','2014-01-01','测试用户');

/*==============================================================*/
/* Index: Index_1                                               */
/*==============================================================*/
create index Index_1 on web_user
(
   user_name
);

alter table in_stock add constraint FK_Reference_31 foreign key (user_id)
      references sys_user (user_id);

alter table in_stock add constraint FK_Reference_32 foreign key (provider_code)
      references provider (provider_code);

alter table in_stock_detail add constraint FK_Reference_29 foreign key (in_stock_id)
      references in_stock (in_stock_id);

alter table in_stock_detail add constraint FK_Reference_33 foreign key (product_code)
      references product (product_code);

alter table member_address add constraint FK_Reference_30 foreign key (user_name)
      references web_user (user_name);

alter table member_supply_record add constraint FK_Reference_35 foreign key (user_name)
      references web_user (user_name);

alter table order_detail add constraint FK_Reference_34 foreign key (bill_code)
      references order_info (bill_code);

alter table order_detail add constraint FK_Reference_42 foreign key (product_code)
      references product (product_code);

alter table order_info add constraint FK_Reference_25 foreign key (user_id)
      references sys_user (user_id);

alter table order_info add constraint FK_Reference_26 foreign key (user_name)
      references web_user (user_name);

alter table order_info add constraint FK_Reference_36 foreign key (delivery_code)
      references delivery_info (delivery_code);

alter table order_info add constraint FK_Reference_41 foreign key (out_stock_id)
      references out_stock (out_stock_id);

alter table out_stock add constraint FK_Reference_28 foreign key (user_id)
      references sys_user (user_id);

alter table out_stock_detail add constraint FK_Reference_39 foreign key (out_stock_id)
      references out_stock (out_stock_id);

alter table out_stock_detail add constraint FK_Reference_40 foreign key (product_code)
      references product (product_code);

alter table product add constraint FK_Referce_28 foreign key (unit_id)
      references product_unit (unit_id);

alter table product add constraint FK_Refere_25 foreign key (status_id)
      references product_sale_status (status_id);

alter table product add constraint FK_Referenc24 foreign key (type_code)
      references product_type (type_code);

alter table product_stock add constraint FK_Reference_47 foreign key (product_code)
      references product (product_code);

alter table sys_log add constraint FK_Reference_46 foreign key (user_id)
      references sys_user (user_id);

alter table sys_log add constraint FK_Reference_7 foreign key (menu_code)
      references sys_menu (menu_code);

alter table sys_role_to_menu add constraint FK_Reference_27 foreign key (role_code)
      references sys_role (role_code);

alter table sys_role_to_menu add constraint FK_Reference_6 foreign key (menu_code)
      references sys_menu (menu_code);

alter table sys_user_role add constraint FK_Reference_44 foreign key (user_id)
      references sys_user (user_id);

alter table sys_user_role add constraint FK_Reference_45 foreign key (role_code)
      references sys_role (role_code);




update sys_menu set controller_full_classname='app.controller.InStock',default_view_classname='InStock_List' where menu_code='0102';

update sys_menu set controller_full_classname='app.controller.Provider',default_view_classname='Provider_List' where menu_code='0101';


update sys_menu set controller_full_classname='app.controller.ProductStock',default_view_classname='ProductStock_List' where menu_code='0201';

update sys_menu set controller_full_classname='app.controller.DeliveryInfo',default_view_classname='DeliveryInfo_List' where menu_code='0302';

update sys_menu set controller_full_classname='app.controller.ProductSaleStatus',default_view_classname='ProductSaleStatus_List' where menu_code='0401';

update sys_menu set controller_full_classname='app.controller.ProductType',default_view_classname='ProductType_List' where menu_code='0402';

update sys_menu set controller_full_classname='app.controller.ProductUnit',default_view_classname='ProductUnit_List' where menu_code='0403';

update sys_menu set controller_full_classname='app.controller.Product',default_view_classname='Product_List' where menu_code='0404';