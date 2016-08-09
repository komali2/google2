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


module.exports = User;