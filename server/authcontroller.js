var api = {};
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

api.login = function(req, res){
    var sess = req.session;
    if(sess.views){
        sess.views++;
        res.status(201).send(sess.views + 'expires in' + sess.cookie.maxAge /1000);
    }
    else{
        sess.views = 1;
        res.status(201).send('welcome! Refresh');
    }
    // res.status(201).send('unimplemented');
}

api.register = function(req, res){
    res.status(201).send('unimplemented');
}

module.exports = api;