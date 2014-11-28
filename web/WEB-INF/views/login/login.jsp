<%@ page language="java" contentType="text/html; charset=utf-8"	pageEncoding="utf-8"%>
<%
  String context_path=request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>系统登录</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="pragma" content="no-cache" />
	<link type="text/css" rel="stylesheet"  href="<%=context_path%>/static/js/extjs/resources/css/ext-all.css" />
	<script type="text/javascript" src="<%=context_path%>/static/js/extjs/bootstrap.js"></script>
	<script type="text/javascript" src="<%=context_path%>/static/js/extjs/locale/ext-lang-zh_CN.js"></script>
	<!--定义全局JS变量-->
	<script type="text/javascript">var GLOBAL_ROOT_PATH="<%=context_path%>";</script>
	<link type="text/css" rel="stylesheet"  href="<%=context_path%>/static/css/login.css" />
	<script type="text/javascript" src="<%=context_path%>/js/login/login.js"></script>
</head>
<body>
<div class="login_bg_img">
</div>
</body>
</html>
