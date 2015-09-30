var ClientController = function(){};

ClientController.prototype.renderIndex = function(req, res, next){
    res.render('index', { title: 'Express' });
};

module.exports = ClientController;
