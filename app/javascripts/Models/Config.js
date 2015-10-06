/**
 * Created by Carlos on 3/10/15.
 */
define(['backbone'], function(Backbone){

    var baseUrl = 'http://localhost:3000/';

    return Backbone.Model.extend({

        baseUrl : baseUrl,

        url : function(){
            return this.baseUrl + 'configuration'
        },

        defaults : {
            baseUrl : baseUrl
        }

    });
});
