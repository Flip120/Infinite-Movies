/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone',
    'Models/Movie'],
    function(Backbone, MovieModel){
    return Backbone.Collection.extend({

        url : function(){
            return Mn.IMApplication.configModel.get('baseUrl') + 'movie'
        },

        parse : function(apiData){
            return apiData.results;
        },

        model : MovieModel
    });
});
