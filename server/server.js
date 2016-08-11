var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 8080;
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var pg = require('pg');

var connectstring = process.env.DATABASE_URL;
var client = new pg.Client(connectstring);

client.connect((err)=>{
    if(err) throw err;

    client.end((err)=>{
        if(err) throw err;
    });
})

process.setMaxListeners(20);

app.use(bodyParser.urlencoded({ extended: true }));

app.set(1); //trust first proxy

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

require('./router.js')(app, express);

app.use(express.static(path.join(__dirname, '../app')));

app.listen(port);

