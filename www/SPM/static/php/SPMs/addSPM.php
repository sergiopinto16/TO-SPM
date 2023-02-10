<?php

    session_start();
    include('spm.php');

    $spm = new SPM();

    
    //$email = mysqli_real_escape_string($db,$_POST['email']);
    //$password = mysqli_real_escape_string($db,$_POST['password']); 
    // $email = $_POST['email'];
    // $password = $_POST['password']; 
    //$res_array_questions = $_POST['res_array_questions'];
    //$res_array_questions = $_COOKIE['res_array_questions']; 

    print("0");
    $jsonString_res_array_questions = json_decode(stripslashes($_POST['jsonString_res_array_questions']));
    print("1");
    $jsonString_res_array_group = json_decode(stripslashes($_POST['jsonString_res_array_group']));
    print("2");
    $jsonString_res_array_score = json_decode(stripslashes($_POST['jsonString_res_array_score']));
    print("3");
    $jsonString_res_array_classificacao_int = json_decode(stripslashes($_POST['jsonString_res_array_classificacao_int']));
    print("4");
    //$res_array_questions = $_POST['res_array_questions']; 
    $avaliation_date = $_POST['avaliation_date']; 
    $avaliation_reason = $_POST['avaliation_reason'];
    $spm_type = $_POST['spm_type'];

    $i = 0;
    $ignore_first_arg = true;
    $res_array_questions = array();
    foreach($jsonString_res_array_questions as $value){
        if(!$ignore_first_arg){
            if($value==null) $res_array_questions[$i]=0;
            else $res_array_questions[$i]=$value;
            $i=$i+1;
        }
        $ignore_first_arg=false;
    }    
    print_r($res_array_questions);
    
    $i = 0;
    $res_array_tscore = array();
    foreach($jsonString_res_array_group as $value){
            if($value==null) $res_array_tscore[$i]=0;
            else $res_array_tscore[$i]=$value;
            $i=$i+1;
        
    }
    print_r($res_array_tscore);


    $i = 0;
    $res_array_score = array();
    foreach($jsonString_res_array_score as $value){
            if($value==null) $res_array_score[$i]=0;
            else $res_array_score[$i]=$value;
            $i=$i+1;
        
    }
    print_r($res_array_score);


    $i = 0;
    $res_array_classificacao_int = array();
    foreach($jsonString_res_array_classificacao_int as $value){
            if($value==null) $res_array_classificacao_int[$i]=0;
            else $res_array_classificacao_int[$i]=$value;
            $i=$i+1;
        
    }
    print_r($res_array_classificacao_int);
    
    
    $spm->check_table_spms();

    $spm->add_new_spm(0,$spm_type,$avaliation_date,$res_array_questions,$avaliation_reason,
      $res_array_tscore,$res_array_score,$res_array_classificacao_int);

?>
