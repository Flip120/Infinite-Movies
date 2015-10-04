/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Models/Movie',
        'Templates/template'],
    function(_, Mn, MovieModel, templates){

        return Mn.ItemView.extend({

            className : 'movie-detail large-12 full-width full-height',

            template : _.template(templates.movieDetail),

            noRenderOnShow : true,

            initialize : function(data){

                this.data = data;

                this.model = new MovieModel({
                    id : this.data.id
                });

                this.model.on('sync', this.prepareData);
            },

            prepareData : function () {

                var configModel = Mn.IMApplication.configModel;
                console.log(configModel.toJSON());
                var profilesBasePath = configModel.get('images').base_url;

                var genres = _.map(this.get('genres'), function(genre){
                    return genre.name;
                });
                this.set('genres', genres.join(', '));

                var cast = _.map(this.get('credits').cast, function(actor){
                    if(actor.profile_path){
                        actor.profile_path = profilesBasePath + 'w185' + actor.profile_path;
                    }
                    return actor;
                });
                this.set('cast_info', cast);

                var director = _.findWhere(this.get('credits').crew, { department : "Directing"});
                this.set('director', director);
            },

            setBackgroundImage : function(){

                this.$el.css({
                    'background-image' : 'url("' + this.model.get('backdrop_path') + '")',

                 });
            }

        });
    });
