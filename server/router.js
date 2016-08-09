var userController = require('./usercontroller.js');

module.exports = function(app, express){
    var userRouter = express.Router();

    app.use('/user', userRouter);

    userRouter.get('/login', userController.login);
    userRouter.post('/register', userController.register);

    userRouter.get('/song', userController.getSong);
    userRouter.post('/songs', userController.addSong);
}