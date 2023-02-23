$(document).ready(function(){

    console.log(sessionStorage.getItem("loggedin"));
    console.log(sessionStorage.getItem("login_username"));

    
        var header_user = document.getElementById("header_user");
        var header_login = document.getElementById("header_login");
        var dashboard = document.getElementById("header_dashboard");

        if(sessionStorage.getItem("loggedin")){
            header_user.style.display = "block";
            header_logout.style.display = "block";
            header_login.style.display = "none";
            header_user.value = sessionStorage.getItem("login_username");
            dashboard.style.display = "block";

        }
        else{
            header_user.style.display = "none";
            header_logout.style.display = "none";
            header_login.style.display = "block";
            dashboard.style.display = "none";
        }


});