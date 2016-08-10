var api = {};

api.login = function(req, res){
    var sess = req.session;
    if(sess.views){
        sess.views++;
        res.send('expires in', (sess.cookie.maxAge /1000));
    }
    else{
        sess.views = 1;
        res.send('welcome! Refresh');
    }
    // res.status(201).send('unimplemented');
}

api.register = function(req, res){
    res.status(201).send('unimplemented');
}

module.exports = api;