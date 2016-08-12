"use strict";

var api = {};
var songcontroller = require('./songcontroller.js');

var Song = songcontroller.Song;
var Songlist = songcontroller.Songlist;


class User {
    constructor(name){
        this.name = name;
        this.songList = new Songlist();
    }
}

api.checkCookies = function(req, res){
    console.log("username is", req.session.username);
    console.log('password is', req.session.password);
}

module.exports = api;