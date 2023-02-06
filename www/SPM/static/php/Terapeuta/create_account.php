<?php

    session_start();
    include('account.php');
    //$conn = new DbConnection();
    $account = new Account();

    //echo "Connection OK";
    
    //$email = mysqli_real_escape_string($db,$_POST['email']);
    //$password = mysqli_real_escape_string($db,$_POST['password']); 
    $email = $_POST['email'];
    $password = $_POST['password']; 


    
    echo "Read inputs";

    $account->check_table_terapeuta();
    
    echo "Execute query";


    $account->add_new_terapeuta($email,$password);

    
?>



