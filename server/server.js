var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 8080;
var pg = require('pg');
var path = require('path');
var userRouter = express.Router();
var userStorage = {};

app.use('/user', userRouter);
userRouter.post('/login', function(req, res){
    if(userStorage[req.body.username]){

    } else{
        //make them register
    }
});
userRouter.post('/register', function(req, res){
    if(req.body.username && req.body.password && userStorage[username] === undefined){
        userStorage[username] = {
            password: password
        }
    } else{
        res.send(500);
    }
});
  app.use(express.static(path.join(__dirname, '../app')));
  //app.use('/arena', arenaRouter);


