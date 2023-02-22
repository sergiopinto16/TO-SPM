<?php


// ini_set('display_errors', 1);

    session_start();
    include('account.php');

    $account = new Account();

    
    //$email = mysqli_real_escape_string($db,$_POST['email']);
    //$password = mysqli_real_escape_string($db,$_POST['password']); 
    $email = $_POST['email'];
    $password = $_POST['password']; 

   //  print($email);
   //  print($password);

    $account->check_table_terapeuta();
    
    $count = $account->login_terapeuta($email,$password);

    echo $count;
      // If result matched $myusername and $mypassword, table row must be 1 row
		

?>
