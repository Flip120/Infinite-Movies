/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Views/MovieCastBox', 'Templates/template'],
    function(_, Mn, MovieCastBoxView,  template){
        'use strict';

        return Mn.CompositeView.extend({

            className : '',

            template : _.template(template.movieCastLayout),

            childView : MovieCastBoxView,

            childViewContainer : '#cast-container',

            initialize : function(){

                var configModel = Mn.IMApplication.configModel;
                var profilesBasePath = configModel.get('images').base_url;
            },

            filter: function (child, index, collection) {
                if(typeof child.get('profile_path') === 'string'){
                    return child;
                }
            }

        });
    });
