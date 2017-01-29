/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Templates/template-holder'],
    function(_, Mn, templates){

        return Mn.ItemView.extend({

            className : 'image-box large-3 medium-2 small-6 column end',

            template : _.template(templates.movieImageBox),

            initialize : function(){
                this.createAbsoluteImageRoutes();
            },

            createAbsoluteImageRoutes : function(){

                var configModel = Mn.IMApplication.configModel;
                var profilesBasePath = configModel.get('images').base_url;

                if(typeof this.model.get('file_path') === 'string'){
                    this.model.set('file_path', profilesBasePath + 'w780' + this.model.get('file_path'));
                }
            }

        });
    });
