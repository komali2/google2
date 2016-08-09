"use strict";

let api = {};

class Songlist {
 constructor(){
     this.songlist = {};
 }

 add(song){
     if(this.songlist[song.title] === undefined){
         this.songlist[song.title] = song;
     }
 }
}

class Song{
    constructor(title, url){
        this.title = title;
        this.url = url;
    }
}

api.Songlist = Songlist;
api.Song = Song;