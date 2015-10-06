/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'backbone', 'marionette',
        'Views/MovieCastView',
        'Views/MovieImagesView',
        'Models/Movie',
        'Collections/Cast',
        'Collections/Image',
        'Templates/template'],
    function(_, Backbone, Mn, MovieCastView, MovieImageView, MovieModel, MovieCastCollection, MovieImageCollection, templates){

        return Mn.LayoutView.extend({

            className : 'movie-detail large-12 full-width full-height',

            template : _.template(templates.movieDetail),

            noRenderOnShow : true,

            events : {
                'click .close-detail' : 'closeDetail'
            },

            regions: {
                cast   : "#cast",
                images : "#images"
            },

            initialize : function(data){

                this.data = data;

                this.model = new MovieModel({
                    id : this.data.id
                });

                this.model.on('sync', this.onModelLoaded.bind(this));
            },

            onModelLoaded : function () {

                var genres = _.map(this.model.get('genres'), function(genre){
                    return genre.name;
                });
                this.model.set('genres', genres.join(', '));

                var director = _.findWhere(this.model.get('credits').crew, { department : "Directing"});
                this.model.set('director', director);
            },

            onRender : function(){

                var castSubView = new MovieCastView({
                    collection : new MovieCastCollection(this.model.get('credits').cast)
                });

                this.getRegion('cast').show(castSubView);

                var imageSubView = new MovieImageView({
                    collection : new MovieCastCollection(this.model.get('images').backdrops)
                });

                this.getRegion('images').show(imageSubView);
            },

            closeDetail : function(){
                this.destroy();
                window.history.back();
            }

        });
    });
