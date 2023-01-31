<?php

$user = 'root';
$password = '';
$database = 'spm';
$host = 'localhost';

$mysqli = new mysqli($host,$user,$password,$database);

if($mysqli->error)    
    die('Connection Failed : ' .$conn->error);


?>