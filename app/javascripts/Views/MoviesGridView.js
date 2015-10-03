/**
 * Created by Carlos on 1/10/15.
 */
define(['underscore', 'marionette',
        'Views/MovieCellView', 'Templates/template'],
    function(_, Mn, MovieCellView, template){
        'use strict';

        return Mn.CompositeView.extend({

            className : 'movie-grid row full-width full-height relative overflow-auto',

            template : _.template(template.grid),

            childView : MovieCellView,

            childViewContainer : '#grid-content',

            events : {
                'scroll' : "onScroll"
            },

            initialize : function(){

                this.paginationData = {
                    currentPage  : 1
                };

                this.loadMoviesFromServer()
                    .then(this.storePaginationData)
                    .then(this.scrollLimitReached.bind(this))
                    .then((function(limitReached){
                        if(limitReached){
                            this.increasePageNumber();
                            this.loadMoviesFromServer();
                        }
                    }).bind(this));
            },

            loadMoviesFromServer : function(){
                this.loading = true;
                return this.collection.fetch({ remove : false, data: { page: this.paginationData.currentPage } })
                    .then((function(data){
                        this.loading = false;
                        return data;
                    }).bind(this));
            },

            storePaginationData : function(data){
                this.paginationData = {
                    currentPage  : data.page,
                    totalPages   : data.total_pages,
                    totalResults : data.total_results
                };
            },

            onScroll : function(e){
                //TODO check page limit
                if(!this.loading && this.scrollLimitReached()) {

                    this.showLoader();
                    this.increasePageNumber();
                    this.loadMoviesFromServer()
                    .then(this.hideLoader.bind(this));
                }
            },

            increasePageNumber : function(){
                this.paginationData.currentPage ++;
            },

            scrollLimitReached : function(){
                return this.$el.scrollTop() + this.$el.height() >= this.$el.get(0).scrollHeight
            },

            showLoader : function(){
                this.$el.find('.grid-loader').removeClass('none');
            },

            hideLoader : function(){
                this.$el.find('.grid-loader').addClass('none');
            }

        });
    });
