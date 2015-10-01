/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone',
    'Models/Movie'],
    function(Backbone, MovieModel){
    return Backbone.Collection.extend({

        url : 'http://localhost:3000/movie',

        parse : function(apiData){
            return apiData.results;
        },

        model : MovieModel
    });
});
