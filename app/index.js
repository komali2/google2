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
            method: "POST",
            url: "user/songs/",
            data:  {
                song: {
                    title: 'canon',
                    url: './canon.mp3'
                },
                username: user
            },
            success: function(res){
                console.log(res);
            }
        });
    });

      
});