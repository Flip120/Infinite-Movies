/**
 * Created by Carlos on 1/10/15.
 */
define(['marionette',
        'Views/MoviesGridView',
        'Collections/Movie',
        'Templates/template'],
    function(Mn, MoviesGridView, MovieCollection, templates){

        return Mn.LayoutView.extend({

            template: _.template(templates.main),

            id : 'app_container',

            regions: {
                menu    : "#menu",
                content : "#content"
            },

            onRender : function(){

                var grid = new MoviesGridView({
                    collection : new MovieCollection()
                });

                this.getRegion('content').show(grid);
                grid.collection.push([{},{},{},{},{},{}]);
            }

        });
});
