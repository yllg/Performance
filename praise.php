<?php

//父类
class Conmysql{
    public $servername;
    public $username;
    public $password;
    public $dbname;
    public $con = '';

    //该类的构造方法
    public function __construct($servername,$username,$password,$dbname){
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
    }

    //连接数据库
    public function getConnection(){
        try {
            $dsn = "mysql:host=$this->servername;dbname=$this->dbname";
            $this->con = new PDO($dsn, $this->username, $this->password);
            // echo "连接mysql数据库成功</br>"; 
        }
        catch(PDOException $e){
            echo $e->getMessage();
        }
    }  

    //更新数据库
    public function updateDate($sql){
        //如果没有连接，让它连接上
        if($this->con == null){
            $this->getConnection();
        }
        header('content-type:application/json;charset=utf-8');
        $res = $this->con->exec($sql);
        $arr = array('result'=>$res);
        echo json_encode($arr);
        $this->closeCon();
        // echo "执行成功返回1，失败返回0；本次执行结果：".$res;
    }

    //关闭数据库连接
    public function closeCon(){
        $this->conn = '';
    }
}


//子类
class realCon extends Conmysql{
    //该类的构造方法
    public function __construct($servername,$username,$password,$dbname){
        parent::__construct($servername,$username,$password,$dbname);
    }

    public function updateRealData(){
        $sql = "UPDATE `test` SET `num`=`num`+1 WHERE `id`=1";
        $this->updateDate($sql);
    }
}

//实例化
$praiseCon = new realCon('localhost','root','','test');
$praiseCon->updateRealData();


?>