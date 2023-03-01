<?php

include('../connection.php');

class Account{


    protected $dbconn;
 
    public function __construct(){
            $this->dbconn = new DbConnection();
    }
   

    public function check_table_utente(){        
        

        /*
        UTENTE
        -> nome
        -> Ano Nascimento
        -> Sexo
        -> FOTO ????
        -> Educador Nome
        -> Educador Ano Nascimento (???)
        -> Educador Grau Parentesco
        -> Educador Contacto
        -> Educador email

        -> Terapeuta (necessário login para adcionar utente)
        */
        
        $query = "CREATE TABLE IF NOT EXISTS utente (
            id int(11) AUTO_INCREMENT,
            NAME varchar(255) NOT NULL,
            EMAIL varchar(255),
            TERAPEUTA_ID int(11),
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

    public function add_new_utente(string $name, string $email,int $terapeuta_id){
        
        //$sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";

        $sql = "INSERT INTO utente (name,email,terapeuta_id) VALUES ('$name','$email','$terapeuta_id')";
        
        if ($this->dbconn->connection->query($sql) === TRUE) { 
            echo "New Utente added Successfuly...";
        } else {
            echo "ERROR adding to table.";
        }
    }



    

    public function get_utente_from_terapeuta(int $terapeuta_id){



        $sql = "SELECT * FROM utente WHERE terapeuta_id = '$terapeuta_id'";
        

        print($sql);
        
        $result = $this->dbconn->connection->query($sql);
    
        $return_array = array();

        $i = 0;
                
        print_r($result);

        foreach($result as $row){
            print_r($row);
            // print(count($row));
            // if(count($row)){  
                $return = array(
                    "ID" => $row['id'],
                    "NAME"=> $row['NAME'],
                    "EMAIL"=> $row['EMAIL'],
                    "TERAPEUTA_ID"=> $row['TERAPEUTA_ID'],
                );
                $return_array[$i] = $return;
                $i++;
                
                // return 1;
            // }
        }
        print("STARTENCODE_returnarrayytsaw_text:");
        echo json_encode($return_array);
    
        return 1;
    
    
    

    }


    

}
?>