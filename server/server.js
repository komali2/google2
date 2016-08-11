var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 8080;
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var pg = require('pg');

const Pool = require('pg-pool');
const url = require('url')

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: false
};

var pool = new Pool(config);

pool.connect().then((client)=>{
    
    client.query('CREATE TABLE IF NOT EXISTS users(users_id serial primary key, name TEXT, password TEXT)').then((res)=>{
        client.release();
       
    })
    .catch(e =>{
        client.release();
        console.error('query error', e.message, e.stack);
    })
});

// example insert statement
// pool.connect().then((client)=>{
//     client.query("INSERT INTO users (name, password) values('testtest2', 'testtestpass2')").then((res)=>{
//         client.release();
//     })
//     .catch(e =>{
//         client.release();
//         console.error('query error', e.message, e.stack);
//     });
// });

//example query statement
// pool.connect().then((client)=>{
//     client.query('SELECT * from users').then((res)=>{
//         console.log('heres what we got', res, res.rows);
//         client.release();
//     })
//     .catch(e =>{
//         client.release();
//         console.error('query error', e.message, e.stack);
//     })

// })

pool.on('error', function(e, client) {
  // if a client is idle in the pool
  // and receives an error - for example when your PostgreSQL server restarts
  // the pool will catch the error & let you handle it here
  console.log('error in pool', error);
});

process.setMaxListeners(20);

app.use(bodyParser.urlencoded({ extended: true }));

app.set(1); //trust first proxy

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

require('./router.js')(app, express, pool);

app.use(express.static(path.join(__dirname, '../app')));

app.listen(port);

