var user;


function register(callback){
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        method: "POST",
        url: "/user/register",
        data: { username: username, password: password },
        success: callback
    });

    user = username;
}



console.log('hello');

$(document).ready(function(){

    $('#submit').on("click", function(){
        console.log('clicked');
        register(function( msg ) {
            console.log(msg);
            
        });
    });

    $('#submitsong').on("click", function(){
        $.ajax({
            method: "GET",
            url: "/auth",
            success: function(res){
                console.log(res);
            }
        });
    });

      
});