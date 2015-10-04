/**
 * Created by Carlos on 1/10/15.
 */

define([
    'marionette',
    'Views/MoviesGridView',
    'Views/MovieDetailView',
    'Collections/Movie'
], function(Mn, MoviesGridView, MovieDetailView, MovieCollection){
    'use strict';

    return Mn.AppRouter.extend({

        initialize : function(){
            this.mainView = Mn.IMApplication.mainView;
        },

        routes : {
            ""          : "movieHomeScreen",
            "movie"     : "movieHomeScreen",
            "movie/:id" : "movieDetailScreen"

        },

        movieHomeScreen : function(){

            var grid = new MoviesGridView({
                collection : new MovieCollection()
            });

            this.mainView.getRegion('content').show(grid);

        },

        movieDetailScreen : function(movieId){

            var $this = this;

            var detailView = new MovieDetailView({
                id : movieId
            });

            detailView.model.on('sync', function(){
                detailView.setBackgroundImage();
                $this.mainView.getRegion('content').show(detailView);
            });

            detailView.model.fetch();
        }
    });
});
