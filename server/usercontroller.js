var api = {};
var userStorage = {};

api.login = function(req, res){
    if(userStorage[req.body.username]){

    } else{
        //make them register
    }
};

api.register = function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    if(username && password && userStorage[username] === undefined){
        userStorage[username] = {
            username: username,
            password: password
        }
        res.sendStatus(200);
    } else{
        res.sendStatus(500);
    }
};

module.exports = api;