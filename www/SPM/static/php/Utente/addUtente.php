<?php
    ini_set('display_errors', 1);

    print("0.0");
    //session_start();
    include('account_utente.php');

    $utente = new Account();


    $utente_name = $_POST['utente_name']; 
    $utente_email = $_POST['utente_email'];
    $terapeuta_id = $_POST['terapeuta_id'];

    
    print($utente_name);
    print($utente_email);
    print($terapeuta_id);
    

    $utente->check_table_utente();

    $utente->add_new_utente($utente_name, $utente_email,$terapeuta_id);

?>