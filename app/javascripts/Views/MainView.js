/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Templates/template'],
    function(_, Mn, templates){

        return Mn.LayoutView.extend({

            template: _.template(templates.main),

            id : 'app_container',

            className : 'full-height block relative overflow-auto',

            regions: {
                menu    : "#menu",
                content : "#content"
            }

        });
});
