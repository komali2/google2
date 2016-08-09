var userController = require('./usercontroller.js');
var auth = require('./authcontroller.js');

module.exports = function(app, express){
    var userRouter = express.Router();
    var authRouter = express.Router();
    app.use('/auth', authRouter);
    app.use('/user', userRouter);

    authRouter.get('/', auth.login);
    authRouter.post('/', auth.register);
}