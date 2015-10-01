/**
 * Created by Carlos on 2/10/15.
 */

var apiData = require('../data/api-data.json');
var request = require('request');

var ConfigurationController = function(){};

ConfigurationController.prototype.getApiConfiguration = function (req, res, next) {

    var url  =  apiData.api_host + '/configuration';
    var page = req.query.page || 1;

    var qs  = {
        api_key : apiData.api_key,
        page    : page
    };

    request.get({ url : url, qs : qs, json : true }, function (e, r, body) {
        res.json({
            images : body.images
        });
    });
};

module.exports = ConfigurationController;