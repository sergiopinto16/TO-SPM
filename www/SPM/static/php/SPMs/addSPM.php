<?php
ini_set('display_errors', 1);

print("0.0");
    //session_start();
    include('spm.php');

    print("0.1");
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
    $terapeuta_id = $_POST['terapeuta_id'];
    $utente_id = $_POST['utente_id'];

    //230224 - modify when terapeuta and utente database are created.
    $terapeuta_id = 0;
    $utente_id = 0;

    $i = 0;
    $ignore_first_arg = true;
    $res_array_questions = array_fill(0,75,0);
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
    $res_array_tscore = array_fill(0,8,0);
    foreach($jsonString_res_array_group as $value){
            if($value==null) $res_array_tscore[$i]=0;
            else $res_array_tscore[$i]=$value;
            $i=$i+1;
        
    }
    print_r($res_array_tscore);


    $i = 0;
    $res_array_score = array_fill(0,8,0);
    foreach($jsonString_res_array_score as $value){
            if($value==null) $res_array_score[$i]=0;
            else $res_array_score[$i]=$value;
            $i=$i+1;
        
    }
    print_r($res_array_score);


    $i = 0;
    $res_array_classificacao_int = array_fill(0,8,0);
    foreach($jsonString_res_array_classificacao_int as $value){
            if($value==null) $res_array_classificacao_int[$i]=0;
            else $res_array_classificacao_int[$i]=$value;
            $i=$i+1;
        
    }
    print_r($res_array_classificacao_int);
    print($avaliation_date);
    print($avaliation_reason);
    print($spm_type );
    
    $spm->check_table_spms();

    $spm->add_new_spm($terapeuta_id,$utente_id,$spm_type,$avaliation_date,$res_array_questions,$avaliation_reason,
      $res_array_tscore,$res_array_score,$res_array_classificacao_int);

?>
