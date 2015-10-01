var ClientController = function(){};

ClientController.prototype.renderIndex = function(req, res, next){
    res.render('index', { title: 'Infinite Movies' });
};

module.exports = ClientController;
