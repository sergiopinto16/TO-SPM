<?php

include('../connection.php');

class Account{


    protected $dbconn;
 
    public function __construct(){
            $this->dbconn = new DbConnection();
    }
   

    public function check_table_terapeuta(){        
        

        /*
        TERAPEUTA
        -> Nome
        -> Email
        -> password
        -> Contacto (???)
        -> Região
        -> Ano Nascimento
        -> Nível Plataforma (0-> Terapeuta , 1->ADMIN)
        */



        $query = "CREATE TABLE IF NOT EXISTS terapeuta (
            id int(11) AUTO_INCREMENT,
            EMAIL varchar(255) NOT NULL UNIQUE,
            PASSWORD varchar(255) NOT NULL,
            USERNAME varchar(255) NOT NULL,
            CONTACT varchar(20),
            REGION varchar(60),
            BIRTH_YEAR int(4),
            LEVEL int(1) DEFAULT '0',
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

    public function add_new_terapeuta(string $email, string $password, string $username){
        
        $sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";

        $sql = "INSERT INTO terapeuta (email,password,username) VALUES ('$email','$password','$username')";
        
        if ($this->dbconn->connection->query($sql) === TRUE) { 
            echo "Registration Successfuly...";
            header("location: ../../../html/Account/login.html");
        } else {
            echo "ERROR adding to table.";
        }
    }


    public function login_terapeuta(string $email, string $password){
        
        $sql = "SELECT id,username FROM terapeuta WHERE email = '$email' and password = '$password'";
        // $query = "SELECT count(*) FROM terapeuta WHERE email = :email and password = :password"; 
        // $query_params = array( ':email' => $email,':password'=> $password); 


        // echo $sql;
        // print_r($query_params);
        $result = $this->dbconn->connection->query($sql);
        // $stmt = $this->dbconn->connection->prepare($query);
        // $result = $stmt->execute($query_params); 

        $return_array = array();
                


        print_r($result);
        foreach($result as $row){
            print_r($row);
            print(count($row));
            if(count($row)){  
                $return = array(
                    "loggedin" => true,
                    "login_username"=> $row['username'],
                    "login_id"=> $row['id']
                );
                $return_array[] = $return;
                print("STARTENCODE_returnarrayytsaw_text:");
                echo json_encode($return_array);
                return 1;
            }
        }

        // $rows = $query->fetchAll();
        /*
        if($query->num_rows > 0){
            $row = $query->fetch_array();
            return $row['id'];
        }
        else{
            return false;
        }
        // */
        // foreach($rows as $row) {
        
        //     echo $row;
        // }

        // die();
        // if($result[0]==0) echo "Is null0";
        
        // $count = mysqli_num_rows($query);
      
        // return $count;
        return 0;


    }


}
?>