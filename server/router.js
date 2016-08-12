var userController = require('./usercontroller.js');
var auth = require('./authcontroller.js');
var path = require('path');

module.exports = function(app, express, pool){
    var userRouter = express.Router();
    var authRouter = express.Router();
    app.use('/auth', authRouter);

    app.use('/client', auth.authenticate);
    app.use(express.static(path.join(__dirname, '../client')));
    app.use('/user', userRouter);

    userRouter.get('/', userController.checkCookies);

    authRouter.post('/login', auth.login);
    authRouter.post('/register', auth.register);
}