/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone',
    'Models/Image'],
    function(Backbone, ImageModel){
    return Backbone.Collection.extend({

        model : ImageModel
    });
});
