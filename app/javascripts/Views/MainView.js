/**
 * Created by Carlos on 1/10/15.
 */
define(['marionette',
        'Templates/template'],
    function(Mn, templates){

        return Mn.LayoutView.extend({

            template: _.template(templates.main),

            id : 'app_container',

            regions: {
                menu    : "#menu",
                content : "#content"
            }

        });
});
