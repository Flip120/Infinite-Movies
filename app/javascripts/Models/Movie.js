/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone'], function(Backbone){
    return Backbone.Model.extend({

        url : function(){
            return 'http://localhost:3000/movie/' + this.get('id')
        },

        parse : function(data){
            data.img = 'https://image.tmdb.org/t/p/w780/' + data.backdrop_path;
            data.overview = data.overview.substr(0, Math.min(150, data.overview.length)) + ' ...';
            return data;
        },

        defaults : {
            title    : 'No title',
            overview : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper  eros, vel maximus tellus ullamcorper id...',
        }
    });
});
