/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone', 'marionette', 'Views/MoviesGridView','Views/MainView', 'Router/IMRouter', 'Models/Config', 'Collections/Movie', 'lightbox2'],
    function(Backbone, Mn, GridView, MainView, AppRouter, ConfigModel, MovieCollection, lightbox){
    'use strict';

    return Mn.Application.extend({

        className : 'no-padding no-margin',

        initialize : function(){
            this.initConfigModel()
            .then((function(){
                this.storeAppRef();
                this.initFoundation();
                this.overrideRenderBehaviour();
                this.initMainView();
                this.initGridView();
                this.initGrinView();
                this.initAppRouter();
            }).bind(this));
        },

        initFoundation : function(){
            $(document).foundation();
        },

        initMainView : function(){
            this.mainView = new MainView();
            $('body').append(this.mainView.el);
            this.mainView.render();
        },

        initGridView : function(){
            var gridView = new GridView({
                collection : new MovieCollection()
            });

            this.mainView.getRegion('content').show(gridView);
        },

        storeAppRef : function(){
            Mn.IMApplication = Mn.IMApplication || this;
        },

        initGrinView : function(){

        },

        initAppRouter : function(){
            this.router = new AppRouter();
            Backbone.history.start();
        },

        initConfigModel : function(){
            this.configModel = new ConfigModel();
            return this.configModel.fetch();
        },

        overrideRenderBehaviour : function(){
            Mn.Renderer.render = function(template, data){
                return template(data);
            };
        }
    });
});
