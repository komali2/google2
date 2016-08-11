"use strict";
var api = {};
var pg = require('pg');
const Pool = require('pg-pool');
const url = require('url')
var bcrypt = require('bcrypt-nodejs');

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

function comparePass(username, attemptedPass, cb){

    pool.connect().then((client)=>{
        client.query("SELECT password FROM users WHERE name = '" + username + "'")
        .then((res)=>{
            client.release();
            let storedPass = res.rows[0]['password'];
            console.log('attempted pass', attemptedPass);
            console.log('stored pass', storedPass);

            bcrypt.compare(attemptedPass, storedPass, (err, isMatch)=>{
                console.log("isMatch is", isMatch);
                cb(isMatch);
            });
        })
        .catch((err)=>{
            console.log('err in query was', err);
        })
    })
}

api.login = function(req, res){
    var sess = req.session;
    if(req.body.username){
        comparePass(req.body.username, req.body.password, (isMatch)=>{
            if(isMatch){
                res.status(201).send('you are logged in!');
            }else{
                res.status(500).send('wrong login!');
            }
        });
    }
    else{
        sess.views = 1;
        res.status(201).send('welcome! Refresh');
    }
    // res.status(201).send('unimplemented');
}

api.register = function(req, res){
    if(req.body.username && req.body.password){
        createUser(req.body.username, req.body.password, ()=>{
            res.status(201).send('Registered!');
        })
    }else{
        res.status(500).send('something went wrong in register');
    }
}

function createUser(username, password, cb){
    pool.connect().then((client)=>{
        console.log('username is', username, 'password is', password);
        client.query(`INSERT INTO USERS 
            (name, password)
            values('${username}', '${password}')`)
        .then((res)=>{
            console.log('response from register was', res);
            cb();
        })
        .catch((err)=>{
            console.log('got into connect');
            console.log('err in register', err);
        })
    })
}

module.exports = api;