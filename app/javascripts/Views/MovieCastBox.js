/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Templates/template'],
    function(_, Mn, templates){

        return Mn.ItemView.extend({

            className : 'cast-box large-2 medium-2 small-3 column end',

            data : 'data-equalizer-watch',

            template : _.template(templates.movieCastBox),

            initialize : function(data){
                this.createAbsoluteImageRoutes();
            },

            createAbsoluteImageRoutes : function(){

                var configModel = Mn.IMApplication.configModel;
                var profilesBasePath = configModel.get('images').base_url;

                if(this.model.get('profile_path')){
                    this.model.set('profile_path', profilesBasePath + 'w185' + this.model.get('profile_path'));
                }
            }

        });
    });
