<?php

    ini_set('display_errors', 1);

    print("0.0");
    //session_start();
    include('spm.php');

    print("0.1");
    $spm = new SPM();


    
    $terapeuta_id = (int)$_POST['terapeuta_id'];

    $terapeuta_id = 0;

    $spm->check_table_spms();

    echo $spm->get_spms($terapeuta_id);


?>