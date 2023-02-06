<?php
class DbConnection{
 
    private $host = 'db';
    private $port = 4501;
    private $username = 'root';
    private $password = 'root';
    private $database = 'spm';
 
    public $connection;
 
    public function __construct(){
        
        //echo "DbConnection-> Connection start";
 
        //if (!isset($this->$connection)) {
 
            //$this->$connection = new mysqli($this->$host, $this->$username, $this->$password, $this->$database,$this->$port);
            //echo $this->host ;
            //echo $this->username;
            //echo $this->password;
            //echo $this->database;

            $this->connection = new mysqli($this->host, $this->username, $this->password, $this->database);
            
 
            if ($this->connection->connect_errno) {
                die("DbConnection| Cannot connect to database server: " . $this->connection->connect_error); 
                exit;
            } 
            
        //}    
        echo "DbConnection-> Connection OK";
        
    }
}
?>