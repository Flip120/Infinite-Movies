/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone'], function(Backbone){
    return Backbone.Model.extend({
        defaults : {
            name : 'Mad Max',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper  eros, vel maximus tellus ullamcorper id...',
            img  : 'https://image.tmdb.org/t/p/w780//t5KONotASgVKq4N19RyhIthWOPG.jpg'
        }
    });
});
