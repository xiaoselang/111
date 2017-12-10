<?php
	require "conn.php";//引入数据库连接的文件

	if(isset($_REQUEST['tel'])){
		$tel=@$_REQUEST['tel'];
	}else{
		exit('非法');
	}

	
	$query="select * from usermessage where tel='$tel'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo true;//有重复
	}else{
		echo false;//没有重复
	}
//	if(isset($_REQUEST['submit']) && $_REQUEST['submit']=="立即注册"){
//		$tel=$_REQUEST['tel'];//username：表单的名称
		$pwd=md5($_REQUEST['pwd']);
		$query="insert usermessage(tel,pwd) values('$tel','$pwd',NOW())";
		mysql_query($query);
//		header('location:../login.html');
//	}
?>