/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Views/MovieCastView',
        'Models/Movie',
        'Collections/Cast',
        'Templates/template'],
    function(_, Mn, MovieCastView, MovieModel, MovieCastCollection, templates){

        return Mn.LayoutView.extend({

            className : 'movie-detail large-12 full-width full-height',

            template : _.template(templates.movieDetail),

            noRenderOnShow : true,

            regions: {
                cast : "#cast"
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

            setBackgroundImage : function(){

                this.$el.css({
                    'background-image' : 'url("' + this.model.get('backdrop_path') + '")'

                 });
            },

            onRender : function(){

                var castSubView = new MovieCastView({
                    collection : new MovieCastCollection(this.model.get('credits').cast)
                });

                this.getRegion('cast').show(castSubView);
            }

        });
    });
