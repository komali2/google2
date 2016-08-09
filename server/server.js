var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 8080;
var pg = require('pg');
var path = require('path');
var userRouter = express.Router();
var userStorage = {};
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', userRouter);
userRouter.post('/login', function(req, res){
    if(userStorage[req.body.username]){

    } else{
        //make them register
    }
});
userRouter.post('/register', function(req, res){
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
});

  app.use(express.static(path.join(__dirname, '../app')));
  //app.use('/arena', arenaRouter);
app.listen(port);

