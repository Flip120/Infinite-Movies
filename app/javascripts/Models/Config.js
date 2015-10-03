/**
 * Created by Carlos on 3/10/15.
 */
define(['backbone'], function(Backbone){
    return Backbone.Model.extend({

        baseUrl : 'http://localhost:3000/',

        url : function(){
            return this.baseUrl + 'configuration'
        }

    });
});
