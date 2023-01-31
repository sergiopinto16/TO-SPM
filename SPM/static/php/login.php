<?php



    include('conection.php');

    $email = $_POST['email'];
    $password = $_POST['passoword'];


    // $conn = nwe mysqli('localhos','root','','spm');
    // if($conn->connect_error){
    //     die('Connection Failed : ' .$conn->connect_error);
    // }

    $stmt = $conn->prepare("insert into terapeuta(email,password) values (?,?)");
    $stmt->bind_param("ss",$email,$password);
        $stmt->execute();
        echo "Registration Successfuly...";
        $stmt->close();
        $conn->close();


        

?>