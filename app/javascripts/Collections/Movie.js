/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone',
    'Models/Movie'],
    function(Backbone, MovieModel){
    return Backbone.Collection.extend({
        model : MovieModel
    });
});
