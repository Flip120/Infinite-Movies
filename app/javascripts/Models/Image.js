/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone', 'marionette'], function(Backbone, Mn){
    return Backbone.Model.extend({

        url : function(){
            return Mn.IMApplication.configModel.get('baseUrl') + '/movie/' + this.get('movieId') + '/images'
        }
    });
});
