var userController = require('./usercontroller.js');
var auth = require('./authcontroller.js');

module.exports = function(app, express, pool){
    var userRouter = express.Router();
    var authRouter = express.Router();
    app.use('/auth', authRouter);
    app.use('/user', userRouter);

    authRouter.post('/login', auth.login);
    authRouter.post('/register', auth.register);
}