var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 8080;
var pg = require('pg');
var path = require('path');
var userRouter = express.Router();
var userStorage = {};
var bodyParser = require('body-parser')
process.setMaxListeners(20);

app.use(bodyParser.urlencoded({ extended: true }))

require('./router.js')(app, express);

app.use(express.static(path.join(__dirname, '../app')));
app.listen(port);

