var apiData = require('../data/api-data.json');
var request = require('request');

var MoviesController = function(){};

MoviesController.prototype.getMovies = function(req, res, next){

    var url  =  apiData.api_host + '/discover/movie';
    var page = req.query.page || 1;

    var qs  = {
        api_key : apiData.api_key,
        page    : page
    };

    request.get({ url : url, qs : qs, json : true }, function (e, r, body) {
      res.json(body);
    });
};

MoviesController.prototype.getMovieDetail = function(req, res, next){

    var movieId = req.params.movieId;
    var url  =  apiData.api_host + '/movie/' + movieId;

    var qs  = {
        api_key : apiData.api_key
    };

    request.get({ url : url, qs : qs, json : true }, function (e, r, body) {
      res.json(body);
    });
};

module.exports = MoviesController;
