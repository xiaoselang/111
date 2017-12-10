<?php
header("content-type:text/html;charset=utf-8");
header('Access-Control-Allow-Origin:*');
//1:获取用户参数 uname;upwd
$conn = mysqli_connect("127.0.0.1","root","12345678","yiyao");
$tel = $_REQUEST["tel"] or die("电话号码是必须的");
$pwd = $_REQUEST["pwd"] or die("密码是必须的");
//2:创建连接并且设置编码
mysqli_query($conn,"SET NAMES UTF8");
//3:创建SQL并且发送SQL
$sql = "insert into usermessage values(NULL,'$tel','$pwd')";
//4:获取返回结果
$result = mysqli_query($conn,$sql);
//5:判断抓取
$row = mysqli_fetch_assoc($result);
if($row===NULL){
    echo json_encode($row);
	header('location:../login.html');
}else{
    echo true;//已经在数据库存在
}
?>