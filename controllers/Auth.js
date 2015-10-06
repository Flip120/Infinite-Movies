/**
 * Created by Carlos on 6/10/15.
 */

var AuthController = function(){};

AuthController.prototype.callback = function (req, res, next) {

    var collection = req.db.collection('users');

    var userData = req.user.profile._json;

    collection.update( { id : userData.id }, { $set : userData }, { upsert : true}, function(){
        res.json({
            success : true,
            message : 'User created',
            data    : userData
        });
    });

};

AuthController.prototype.onAuthError = function (req, res, next) {
    console.log('ERORORORORO');
    res.json({
        success : false,
        message : 'Authentication Failed'
    });
};

module.exports = AuthController;