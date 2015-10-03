/**
 * Created by Carlos on 1/10/15.
 */
define(['backbone', 'marionette', 'Views/MainView', 'Router/IMRouter'],
    function(Backbone, Mn, MainView, AppRouter){


    return Mn.Application.extend({

        className : 'no-padding no-margin',

        initialize : function(){

            $(document).foundation();

            this.mainView = new MainView();
            $('body').append(this.mainView.el);
            this.mainView.render();

            Mn.IMApplication = Mn.IMApplication || this;

            this.router = new AppRouter();

            Backbone.history.start();
        }
    });
});
