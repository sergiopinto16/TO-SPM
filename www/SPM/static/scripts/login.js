
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

            var string_code = 'STARTENCODE_returnarrayytsaw_text:';

            var start_array = response.indexOf(string_code);
            console.log(start_array);

            var start_json_response = start_array+string_code.length;
            var end_json_response = response.length - 1;
            var length_json_response = end_json_response-start_json_response;
            json_response = response.substr(start_json_response,length_json_response);
            
            console.log(json_response);



            if(count==1) {
                //session_register("email");
                var return_array = JSON.parse(json_response);

                console.log(return_array);

                sessionStorage.setItem("login_username", return_array[0].login_username);
                sessionStorage.setItem("login_id", return_array[0].login_id);
                sessionStorage.setItem("loggedin", true);
                
                console.log(return_array[0].login_username);





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


function Logout(){


    sessionStorage.clear();
    window.location.href = "../../../../SPM";  // this reloads

}