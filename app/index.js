var user;


function register(callback){
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        method: "POST",
        url: "/auth/register",
        data: { username: username, password: password },
        success: callback
    });

    user = username;
}

function login(){
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        method: "POST",
        url: "/auth/login",
        data: {username: username, password: password},
        success: function(res){
            console.log('we got back', res);
        }
    })
}

function checkCookies(){
    $.ajax({
        method: 'GET',
        url: '/user',
        success: function(res){
            console.log('we got back', res);
        }
    })
}



console.log('hello');

$(document).ready(function(){

    $('#submit').on("click", function(){
        console.log('clicked');
        register(function( msg ) {
            console.log('register return was', msg);
            
        });
    });

    $('#submitsong').on("click", function(){
        login();
    });

    $('#check').on("click", function(){
        checkCookies();
    });

      
});