function register(callback){
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        method: "POST",
        url: "/user/register",
        data: { username: username, password: password },
        success: callback
    });
}



console.log('hello');

$(document).ready(function(){

    $('#submit').on("click", function(){
        console.log('clicked');
        register(function( msg ) {
            $('#responses').append(msg);
            console.log(msg);
        });
    });
})