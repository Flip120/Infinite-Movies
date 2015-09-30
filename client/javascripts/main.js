
'use strict';


require.config({
    shim: {},
    paths: {
        jquery     : '/bower_components/jquery/dist/jquery',
        backbone   : '/bower_components/backbone/backbone',
        underscore : '/bower_components/underscore/underscore-min',
        marionette : '/bower_components/marionette/lib/backbone.marionette.min'
    },
    urlArgs: "v=1.0.0"
});

require([
    'underscore', 'backbone', 'marionette'
], function (_, Backbone, Mn) {

    var app = new Marionette.Application();

    app.on('start', function() {
        Backbone.history.start();
    });

    app.start();

});
