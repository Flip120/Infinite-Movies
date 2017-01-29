/**
 * Created by Carlos on 3/10/15.
 */
define(['backbone'], function(Backbone){

    var baseUrl = '/';

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
