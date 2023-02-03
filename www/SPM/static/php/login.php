<?php


session_start();

    include('conection.php');

    
    $email = mysqli_real_escape_string($db,$_POST['email']);
    $password = mysqli_real_escape_string($db,$_POST['password']); 


    $sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";
    if ($conn->query($sql) === TRUE) { 
        
    } else {
        echo "ERROR adding to table.";
    }


    //$result = mysqli_query($db,$sql);
    //$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    //$active = $row['active'];


    $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         session_register("email");
         $_SESSION['login_user'] = $email;
         
         header("location: ../../index.html");

      }else {

         $error = "Your Login Email or Password is invalid";

      }

?>



<?php
include_once('DbConnection.php');
 
class User extends DbConnection{
 
    public function __construct(){
 
        parent::__construct();
    }
 
    public function check_login($username, $password){
 
        $sql = "SELECT * FROM terapeuta WHERE email = '$email' AND password = '$password'";
        $query = $this->connection->query($sql);
 
        if($query->num_rows > 0){
            $row = $query->fetch_array();
            return $row['id'];
        }
        else{
            return false;
        }
    }
 
    public function details($sql){
 
        $query = $this->connection->query($sql);
 
        $row = $query->fetch_array();
 
        return $row;       
    }
 
    public function escape_string($value){
 
        return $this->connection->real_escape_string($value);
    }
}