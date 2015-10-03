/**
 * Created by Carlos on 1/10/15.
 */

define([
    'marionette',
    'Views/MoviesGridView',
    'Collections/Movie'
], function(Mn, MoviesGridView, MovieCollection){

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
            grid.collection.fetch();

        },

        movieDetailScreen : function(){

        }
    });
});
