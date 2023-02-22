
function Login() {


    $.ajax({
        type: 'POST',
        url: '../../static/php/Terapeuta/login.php',
        data: { email : document.getElementById("email").value,
                password :  document.getElementById("password").value},
        success: function(response) {
            console.log("sucess!");
            console.log(response);
                    
            var count = response.substr(response.length - 1); 

            console.log(count);
            sessionStorage.clear();
            if(count==1) {
                //session_register("email");
                sessionStorage.setItem("login_user", document.getElementById("email").value);
                sessionStorage.setItem("loggedin", true);
                
                
                window.location.href = "../../../../SPM";  // this reloads


            }else {

                error = "Your Login Email or Password is invalid";
                console.log(error);
                //header("Location: ../../../html/Account/login.html");
                alert(error);
            }
            
        },
        error: function(response) {
            console.log("error!");
            console.log(response);
        }
      });





}