/**
 * Created by Carlos on 1/10/15.
 */
define(['marionette',
        'Views/MovieCellView',
        'Templates/template'],
    function(Mn, MovieCellView, templates){

        return Mn.CollectionView.extend({

            className : 'movie-grid row full-width',

            template: _.template(templates.movieCell),

            childView : MovieCellView

        });
    });
