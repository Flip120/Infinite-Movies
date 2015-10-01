'use strict';

require.config({
    paths: {
        jquery     :'../bower_components/jquery/dist/jquery',
        backbone   : '../bower_components/backbone/backbone',
        underscore : '../bower_components/underscore/underscore-min',
        marionette : '../bower_components/marionette/lib/backbone.marionette.min',
        text       : '../bower_components/requirejs-text/text',
        foundation : '../bower_components/foundation/js/foundation.min'
    },

    shim: {
        underscore: {
            exports: '_'
        },

        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        marionette: {
            deps: ["backbone"],
            exports:"Marionette"
        },

        foundation : {
            deps : ['jquery']
        }
    },

    urlArgs: "v=1.0.0"
});

require([
    'Application/IMApplication', 'foundation'
], function (IMApplication) {

    var app = new IMApplication();

});
