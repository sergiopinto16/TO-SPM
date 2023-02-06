<?php

include('connection.php');

class Account{


    protected $dbconn;
 
    public function __construct(){
            $this->dbconn = new DbConnection();
    }
   

    public function check_table_terapeuta(){        
        
        
        $query = "CREATE TABLE IF NOT EXISTS terapeuta (
            id int(11) AUTO_INCREMENT,
            EMAIL varchar(255) NOT NULL,
            PASSWORD varchar(255) NOT NULL,
            PRIMARY KEY  (ID)
            )";

        //$result = mysqli_query($db,$query);

        echo "Execute query";
        
        if ($this->dbconn->connection->query($query) === TRUE) {
            echo "New table created successfully";
        } else {
            echo "Error: " . $query . "<br>" . $this->dbconn->connection->error;
        }

        echo "End check_table_terapeuta";

    }

    public function add_new_terapeuta(string $email, string $password){
        
        $sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";

        $sql = "INSERT INTO terapeuta (email,password) VALUES ('$email','$password')";
        
        if ($this->dbconn->connection->query($sql) === TRUE) { 
            echo "Registration Successfuly...";
            header("location: ../../../html/Account/login.html");
        } else {
            echo "ERROR adding to table.";
        }
    }


    public function login_terapeuta(string $email, string $password){
        
        $sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";
        $query = $this->dbconn->connection->query($sql);
        /*
        if($query->num_rows > 0){
            $row = $query->fetch_array();
            return $row['id'];
        }
        else{
            return false;
        }
        */


        $count = mysqli_num_rows($query);
      
        return $count;


    }


}
?>