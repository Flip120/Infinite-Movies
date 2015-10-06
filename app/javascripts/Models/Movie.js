/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone', 'marionette'], function(Backbone, Mn){
    return Backbone.Model.extend({

        url : function(){
            return Mn.IMApplication.configModel.get('baseUrl') + 'movie/' + this.get('id')
        },

        parse : function(data){
            data.backdrop_path = 'https://image.tmdb.org/t/p/w1280' + data.backdrop_path;
            data.poster_path   = 'https://image.tmdb.org/t/p/w342' + data.poster_path;
            data.big_poster_path   = 'https://image.tmdb.org/t/p/w500/' + data.poster_path;
            data.short_overview = data.overview.substr(0, Math.min(140, data.overview.length)) + ' ...';
            return data;
        },

        defaults : {
            title    : '',
            overview : '',
            backdrop_path : '',
            poster_path : '',
            big_poster_path : ''
        }
    });
});
