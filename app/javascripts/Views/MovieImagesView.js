/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Views/MovieImagesBox', 'Templates/template-holder'],
    function(_, Mn, MovieImagesBox,  template){
        'use strict';

        return Mn.CompositeView.extend({

            className : '',

            template : _.template(template.movieImagesLayout),

            childView : MovieImagesBox,

            childViewContainer : '#images-container',

            initialize : function(){
                this.selectedImages = this.selectRandomImages();
            },

            selectRandomImages : function(){

                var count = Math.max(4, this.collection.length);
                var selectedImages = [];
                for (var i = 0; i < 8; i++) {
                    selectedImages.push( Math.floor(Math.random() * count) );
                }

                return selectedImages;
            },



            filter: function (child, index, collection) {
                if(typeof child.get('file_path') === 'string' && this.selectedImages.indexOf(index) > -1){
                    return child;
                }
            }

        });
    });
