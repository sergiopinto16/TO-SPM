function Get_SPMs(){
// $(document).ready(function(){




    $username = sessionStorage.getItem("login_username");
    $userid = sessionStorage.getItem("login_id");


    console.log($username);
    console.log($userid);
    
    $.ajax({
        type: 'POST',
        url: '../../static/php/SPMs/getSPM.php',
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

            var tbodyRef = document.getElementById('spmsTable').getElementsByTagName('tbody')[0];
            tbodyRef.innerHTML ="";

            if(count==1) {
                //session_register("email");
                var return_array = JSON.parse(json_response);

                console.log(return_array);


                // sessionStorage.setItem("login_username", return_array[0].login_username);
                // sessionStorage.setItem("login_id", return_array[0].login_id);
                // sessionStorage.setItem("loggedin", true);


               

                for (let i = 0; i < return_array.length; i++) {


                console.log(return_array[i].ID);



                // Insert a row at the end of table
                var newRow = tbodyRef.insertRow();

                var newText = document.createTextNode('new row');

                // Insert a cell at the end of the row
                var cell_id = newRow.insertCell(0);
                cell_id.innerHTML = return_array[i].ID;
                var cell_avaliation_date = newRow.insertCell(1);
                cell_avaliation_date.innerHTML = return_array[i].AVALIATION_DATE;
                var cell_spm_type = newRow.insertCell(2);
                cell_spm_type.innerHTML = return_array[i].SPM_TYPE;
                var cell_terapeuta_id = newRow.insertCell(3);
                cell_terapeuta_id.innerHTML = return_array[i].TERAPEUTA_ID;
                var cell_utente_id = newRow.insertCell(4);
                cell_utente_id.innerHTML = return_array[i].UTENTE_ID;
                var cell_motivo = newRow.insertCell(5);
                cell_motivo.innerHTML = return_array[i].AVALIATION_REASON;
                
                var cell_ps_comentario = newRow.insertCell(6);
                cell_ps_comentario.innerHTML = return_array[i].GROUP_PS_COMENTARIO;
                var cell_vis_comentario = newRow.insertCell(7);
                cell_vis_comentario.innerHTML = return_array[i].GROUP_VIS_COMENTARIO;
                var cell_aud_comentario = newRow.insertCell(8);
                cell_aud_comentario.innerHTML = return_array[i].GROUP_AUD_COMENTARIO;

                var cell_toq_comentario = newRow.insertCell(9);
                cell_toq_comentario.innerHTML = return_array[i].GROUP_TOQ_COMENTARIO;
                var cell_go_comentario = newRow.insertCell(10);
                cell_go_comentario.innerHTML = return_array[i].GROUP_GO_COMENTARIO;
                
                var cell_conscorp_comentario = newRow.insertCell(11);
                cell_conscorp_comentario.innerHTML = return_array[i].GROUP_CONSCCORP_COMENTARIO;
                
                var cell_movequ_comentario = newRow.insertCell(12);
                
                cell_movequ_comentario.innerHTML = return_array[i].GROUP_MOVEQU_COMENTARIO;

                var cell_plami_comentario = newRow.insertCell(13);
                cell_plami_comentario.innerHTML = return_array[i].GROUP_PLAMI_COMENTARIO;
                
                
                var cell_tot_comentario = newRow.insertCell(14);
                cell_tot_comentario.innerHTML = return_array[i].GROUP_TOTAL_COMENTARIO;

                }//end for i

                // window.location.href = "../../../../SPM";  // this reloads


            }else {

                error = "No SPMs in database";
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
// );