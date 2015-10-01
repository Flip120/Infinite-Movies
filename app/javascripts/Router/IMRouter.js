/**
 * Created by Carlos on 1/10/15.
 */

define(['marionette'], function(Mn){

    return Mn.AppRouter.extend({

        appRoutes: {
            "some/route": "someMethod"
        },

        /* standard routes can be mixed with appRoutes/Controllers above */
        routes : {
            "some/otherRoute" : "someOtherMethod"
        },
        someOtherMethod : function(){
            // do something here.
        }

    });
});
