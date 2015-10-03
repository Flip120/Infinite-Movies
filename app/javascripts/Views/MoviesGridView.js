/**
 * Created by Carlos on 1/10/15.
 */
define(['marionette',
        'Views/MovieCellView'],
    function(Mn, MovieCellView){
        'use strict';

        return Mn.CollectionView.extend({

            className : 'movie-grid row full-width full-height relative overflow-auto',

            childView : MovieCellView,

            events : {
                'scroll' : "onScroll"
            },

            initialize : function(){

                this.page = 1;

                this.loadMoviesFromServer()
                    .then(this.storePaginationData);
            },

            loadMoviesFromServer : function(){
                return this.collection.fetch({ remove : false, data: { page: this.page } });
            },

            storePaginationData : function(data){
                this.paginationData = {
                    currentPage  : data.page,
                    totalPages   : data.total_pages,
                    totalResults : data.total_results
                };
            },

            onScroll : function(e){
                if(this.$el.scrollTop() + this.$el.height() >= this.$el.get(0).scrollHeight) {
                    this.page ++;
                    this.loadMoviesFromServer();
                }
            }

        });
    });
