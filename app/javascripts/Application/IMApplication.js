/**
 * Created by Carlos on 1/10/15.
 */
define(['marionette',
        'Views/MainView'],
    function(Mn, MainView){


    return Mn.Application.extend({

        className : 'no-padding no-margin',

        initialize : function(){

            $(document).foundation();

            this.mainView = new MainView();
            $('body').append(this.mainView.el);
            this.mainView.render();
        }
    });
});
