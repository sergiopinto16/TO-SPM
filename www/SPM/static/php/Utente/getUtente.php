<?php

    ini_set('display_errors',1);


    print("0.0");
    //session_start();
    include('account_utente.php');

    print("0.1");
    $utente = new Account();

    
    $terapeuta_id = (int)$_POST['terapeuta_id'];


    $utente->check_table_utente();


    echo $utente->get_utente_from_terapeuta($terapeuta_id);;

    

?>