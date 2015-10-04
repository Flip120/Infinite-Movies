/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone', 'marionette', 'Views/MainView', 'Router/IMRouter', 'Models/Config', 'lightbox2'],
    function(Backbone, Mn, MainView, AppRouter, ConfigModel, lightbox){
    'use strict';

    return Mn.Application.extend({

        className : 'no-padding no-margin',

        initialize : function(){
            this.initConfigModel()
            .then((function(){
                this.initFoundation();
                this.overrideRenderBehaviour();
                this.initMainView();
                this.storeAppRef();
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

        storeAppRef : function(){
            Mn.IMApplication = Mn.IMApplication || this;
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
