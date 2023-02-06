<?php


    session_start();
    include('account.php');

    $account = new Account();

    
    //$email = mysqli_real_escape_string($db,$_POST['email']);
    //$password = mysqli_real_escape_string($db,$_POST['password']); 
    $email = $_POST['email'];
    $password = $_POST['password']; 

    
    $count = $account->login_terapeuta($email,$password);

    
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         //session_register("email");
         //$_SESSION['login_user'] = $email;
         
         header("location: ../../index.html");

      }else {

         $error = "Your Login Email or Password is invalid";
        
      }

?>
