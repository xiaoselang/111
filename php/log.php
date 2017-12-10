<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/7
 * Time: 13:00
 */
header("content-type:text/html;charset=utf-8");
header('Access-Control-Allow-Origin: *');//跨域


    $tel=$_REQUEST["tel"];
    $pwd = $_REQUEST["pwd"];
    //1.连接数据量 ,ip地址、用户名 、密码、 库名称
    $serverName = '127.0.0.1';// 数据库的名称 ip地址
    $dbUser = 'root';//用户名
    $dbPwd = '12345678';//密码
    $dbName = 'yiyao';//库名称

    $connection = new mysqli($serverName, $dbUser, $dbPwd, $dbName); //创建连接对象
    //mysqli_query($conn, "set names utf8");//给的$conn的字符串设置字符集
    // -> 相当于 js的 .  点属性
    if($connection->connect_error){
        $arr = array();
        $arr["status"] = 0;
        $arr["msg"] = "连接失败";
        print_r(json_encode($arr));//就以json的方式告诉客户端（前端）
    }
    //执行sql语句
    $sql = " SELECT*FROM usermessage  WHERE tel='".$tel."' AND pwd='".$pwd."'";
    $result = $connection->query($sql);//返回一个对象 query 查询
    //判断一下，如果数据库里返回的结果 大于或等于1，表示登录成功，否则登录失败
    if($result->num_rows >= 1){
        //登录成功
        $arr = array();
        $arr["status"] = 1;
        $arr["msg"] = "登录成功";
        setcookie('tel&pwd',$tel.'&'.$pwd,time()+2*7*24*3600);
        header('location:../index.html');
    } else {
        $arr = array();
        $arr["status"] = 0;
        $arr["msg"] = "登录失败，用户名或密码错误!";
        print_r(json_encode($arr));
        header('location:../login.html');
    }