
var authRoutes = function(passport){
    var express = require('express');
    var router = express.Router();
    var authController = new (require('../controllers/Auth'))();

    router.get('/', passport.authenticate('github'));
    router.get('/callback',
        passport.authenticate('github', {failureRedirect: '/auth/error'}), authController.callback);
    router.get('/error', authController.onAuthError);

    return router;
};

module.exports = authRoutes;