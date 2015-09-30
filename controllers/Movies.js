var apiData = require('../data/api-data.json');
var request = require('request');

var MoviesController = function(){};

MoviesController.prototype.getMovies = function(req, res, next){
    var url =  apiData.api_host + 'discover/movie';
    var qs  = { api_key : apiData.api_key, append_to_response : 'images' };
    request.get({url:url, qs:qs, json:true}, function (e, r, body) {
      res.json(body);
    });
};

MoviesController.prototype.getMovieDetail = function(req, res, next){
    res.json({
        data : ':)'
    });
};

module.exports = MoviesController;
