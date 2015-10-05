/**
 * Created by Carlos on 1/10/15.
 */

define([
    'marionette',
    'Views/MoviesGridView',
    'Views/MovieDetailView'
], function(Mn, MoviesGridView, MovieDetailView){
    'use strict';

    return Mn.AppRouter.extend({

        initialize : function(){
            this.mainView = Mn.IMApplication.mainView;
        },

        routes : {
            "movie/:id" : "movieDetailScreen"

        },

        movieDetailScreen : function(movieId){

            var $this = this;

            var detailView = new MovieDetailView({
                id : movieId
            });

            detailView.model.on('sync', function(){
                var regionView = $this.mainView.getRegion('detail');
                regionView.show(detailView);

            });

            detailView.model.fetch();
        }
    });
});
