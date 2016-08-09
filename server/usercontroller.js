"use strict";

var api = {};
var songcontroller = require('./songcontroller.js');

var Song = songcontroller.Song;
var Songlist = songcontroller.Songlist;

var userStorage = {};

class User {
    constructor(name, password){
        this.name = name;
        this.password = password;
        this.songList = new Songlist();
    }

}

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

api.getSong = function(req, res){
    var songTitle = req.query['song'];
    var user = req.query['user'];

}

api.addSong = function(req, res){
    var song = req.body.song;
    var user = req.body.username;
    userStorage[user].songList.add(song);
}

module.exports = api;