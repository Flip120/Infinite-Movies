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

            initialize : function(data){
                this.model = new MovieModel({
                    id : data.id
                });

                return this.model.fetch()
                .then(this.render)
                .then(this.setBakgroundImage.bind(this));
            },

            setBakgroundImage : function(){

                this.$el.css({
                    'background-image' : 'url("' + this.model.get('backdrop_path') + '")',
                    'background-size' : 'cover'
                })
            }

        });
    });
