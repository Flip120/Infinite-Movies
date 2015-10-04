/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone'], function(Backbone){
    return Backbone.Model.extend({

        url : function(){
            return 'http://localhost:3000/movie/' + this.get('movieId') + '/images'
        }
    });
});
