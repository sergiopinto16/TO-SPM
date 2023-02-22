$(document).ready(function(){

    console.log(sessionStorage.getItem("loggedin"));
    console.log(sessionStorage.getItem("login_user"));

    if(sessionStorage.getItem("loggedin")){
        var element = document.getElementById('header-login');
        element.value =sessionStorage.getItem("login_user");
    }
    else {
        var element = document.getElementById('header-login');
        element.value  ="LOGIN";
    }

});