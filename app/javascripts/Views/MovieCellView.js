/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Templates/template-holder'],
    function(_, Mn, templates){

        return Mn.ItemView.extend({

            className : 'animated fadeIn movie-cell large-2 medium-3 small-6 columns relative overflow-hidden block end',

            template : _.template(templates.movieCell)

        });
    });
