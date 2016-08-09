"use strict";

let api = {};

class Songlist {
 constructor(){
     this.list = {};
 }

 add(song){
     if(this.list[song.title] === undefined){
         this.list[song.title] = song;
     }
 }
}

class Song{
    constructor(title, url){
        this.title = title;
        this.url = url;
        this.timeplayed = 0;
    }

    addTime(time){
        this.timeplayed += time;
    }
}

api.Songlist = Songlist;
api.Song = Song;