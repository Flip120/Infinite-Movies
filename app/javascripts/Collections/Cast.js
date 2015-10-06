/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone',
    'Models/Cast'],
    function(Backbone, CastModel){
    return Backbone.Collection.extend({

        parse : function(apiData){
            return apiData.results;
        },

        model : CastModel
    });
});
