/**
 * Created by Carlos on 1/10/15.
 */
define(['marionette',
        'Templates/template'],
    function(Mn, templates){

        return Mn.ItemView.extend({

            className : 'movie-cell large-3 medium-3 small-6 columns relative overflow-hidden block',

            template : _.template(templates.movieCell)

        });
    });
