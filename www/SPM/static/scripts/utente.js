function Add_Utente(){

    $username = sessionStorage.getItem("login_username");
    $terapeuta_id = sessionStorage.getItem("login_id");


    $utente_name = document.getElementById("utente_name").value
    $utente_age = document.getElementById("utente_age").value
    $utente_sex = document.querySelector('input[name="u_sex"]:checked').value;
    $utente_email = "";


    console.log($username);
    console.log($terapeuta_id);
    console.log($utente_name);
    console.log($utente_age);
    console.log($utente_sex);
    



    $.ajax({
        type: 'POST',
        url: '../../static/php/Utente/addUtente.php',
        data: { 
            utente_name : $utente_name,
            utente_email : $utente_email,
            terapeuta_id : $terapeuta_id},
        success: function(response) {
            console.log("sucess!");
            console.log(response);
        },
        error: function(response) {
            console.log("error!");
            console.log(response);
        }
      });

      




}


utentes_array = [""];


function Get_Utentes(){


    $username = sessionStorage.getItem("login_username");
    $userid = sessionStorage.getItem("login_id");


    console.log($username);
    console.log($userid);



    
    $.ajax({
        type: 'POST',
        url: '../../static/php/Utente/getUtente.php',
        data: { terapeuta_id : $userid},
        success: function(response) {
            console.log("sucess!");
            console.log(response);
                    
            var count = response.substr(response.length - 1); 

            console.log(count);

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
                utentes_array = JSON.parse(json_response);

                console.log(utentes_array);


                // sessionStorage.setItem("login_username", return_array[0].login_username);
                // sessionStorage.setItem("login_id", return_array[0].login_id);
                // sessionStorage.setItem("loggedin", true);


            }else {

                error = "No Utentes in database";
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

function Get_Utentes_Update_Table(){




    $username = sessionStorage.getItem("login_username");
    $userid = sessionStorage.getItem("login_id");


    console.log($username);
    console.log($userid);



    
    $.ajax({
        type: 'POST',
        url: '../../static/php/Utente/getUtente.php',
        data: { terapeuta_id : $userid},
        success: function(response) {
            console.log("sucess!");
            console.log(response);
                    
            var count = response.substr(response.length - 1); 

            console.log(count);

            var string_code = 'STARTENCODE_returnarrayytsaw_text:';

            var start_array = response.indexOf(string_code);
            console.log(start_array);

            var start_json_response = start_array+string_code.length;
            var end_json_response = response.length - 1;
            var length_json_response = end_json_response-start_json_response;
            json_response = response.substr(start_json_response,length_json_response);
            
            console.log(json_response);

            var tbodyRef = document.getElementById('utentesTable').getElementsByTagName('tbody')[0];
            tbodyRef.innerHTML ="";

            if(count==1) {
                //session_register("email");
                utentes_array = JSON.parse(json_response);

                console.log(utentes_array);


                // sessionStorage.setItem("login_username", return_array[0].login_username);
                // sessionStorage.setItem("login_id", return_array[0].login_id);
                // sessionStorage.setItem("loggedin", true);


               

                for (let i = 0; i < utentes_array.length; i++) {


                console.log(utentes_array[i].ID);



                // Insert a row at the end of table
                var newRow = tbodyRef.insertRow();

                var newText = document.createTextNode('new row');

                // Insert a cell at the end of the row
                var cell_id = newRow.insertCell(0);
                cell_id.innerHTML = utentes_array[i].ID;
                var cell_name = newRow.insertCell(1);
                cell_name.innerHTML = utentes_array[i].NAME;
                var cell_EMAIL = newRow.insertCell(2);
                cell_EMAIL.innerHTML = utentes_array[i].EMAIL;
                var cell_terapeuta_id = newRow.insertCell(3);
                cell_terapeuta_id.innerHTML = utentes_array[i].TERAPEUTA_ID;
                var cell_utente_id = newRow.insertCell(4);

                }//end for i

                // window.location.href = "../../../../SPM";  // this reloads


            }else {

                error = "No Utentes in database";
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