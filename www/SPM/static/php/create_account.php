<?php

session_start();

    include('conection.php');

    
    $email = mysqli_real_escape_string($db,$_POST['email']);
    $password = mysqli_real_escape_string($db,$_POST['password']); 



    $query = "CREATE TABLE IF NOT EXISTS terapeuta (
        id int(11) AUTO_INCREMENT,
        EMAIL varchar(255) NOT NULL,
        PASSWORD varchar(255) NOT NULL,
        PRIMARY KEY  (ID)
        )";

    //$result = mysqli_query($db,$query);
   
    if ($conn->query($query) === TRUE) {
        echo "New table created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    
    $sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";

    $sql = "INSERT INTO terapeuta (email,password) VALUES ('$email','$password')";
    
    if ($conn->query($sql) === TRUE) { 
        echo "Registration Successfuly...";
        header("location: ../../html/Account/login.html");
    } else {
        echo "ERROR adding to table.";
    }

    
?>



