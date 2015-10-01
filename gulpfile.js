"use strict";

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    del = require('del'),
    rjs = require('gulp-requirejs'),
    replace = require('gulp-replace');

var routes = require('./gulpconfig').routes;
var appRoutes   = routes.app,
    appbasePath = appRoutes.base,
    sassPath    = appRoutes.sass,
    scriptsPath = appRoutes.scripts;

var distRoutes = routes.dist,
    distBasePath = distRoutes.base,
    cssPath      = distRoutes.css,
    jsPath       = distRoutes.js;

gulp.task('serve', ['sass-dev'], function(){

    browserSync.init({
        server: "./" + appbasePath,
        port : 3001
    });

    gulp.watch( sassPath + "/*.scss", ['sass-dev']);
    gulp.watch( scriptsPath + "/*.js", ['js-dev']);
    gulp.watch( appbasePath + "/*.html").on('change', browserSync.reload);

});

gulp.task('js-dev', function(){
    gulp.src( scriptsPath + "/*.js")
        .pipe(browserSync.stream({match: '**/*.js'}));
});

gulp.task('sass-dev', function(){
    gulp.src( sassPath +"/*.scss")
    .pipe(sass())
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(gulp.dest(sassPath))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {

    gulp.src( sassPath +"/*.scss", { sourcemap : true })
        .pipe(sass())
        .pipe(gulp.dest( cssPath ))
        .pipe(browserSync.stream())
    //.pipe(watch( sassPath + "/*.scss", ['sass']));
});

gulp.task('copy-require', function(){

    gulp.src(appbasePath + '/bower_components/requirejs/require.js')
    .pipe(uglify())
    .pipe(gulp.dest(jsPath))
});

gulp.task('minify-html', ['copy-require'], function() {
    var opts = {
        conditionals: true,
        spare:true
    };

    gulp.src( appbasePath + '/*.html')
        .pipe(minifyHTML(opts))
        .pipe(replace('/javascripts/main', '/javascripts/main.built'))
        .pipe(replace('/stylesheets/', '/css/'))
        .pipe(replace('/bower_components/requirejs/require.js', '/javascripts/require.js'))
        .pipe(gulp.dest( distBasePath ))
        .pipe(browserSync.stream())
    //.pipe(watch( appbasePath + "/*.html", ['minify-html']));
});

gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl: scriptsPath,
        out:  jsPath + '/main.built.js',
        shim: {
            // standard require.js shim options
        },
        paths : {
            'jquery': '../bower_components/jquery/dist/jquery',
            'underscore': '../bower_components/underscore/underscore',
            'backbone': '../bower_components/backbone/backbone',
            'marionette': '../bower_components/marionette/lib/backbone.marionette.min'
        },
        name : 'main',
        preserveLicenseComments: false,
        useStrict: true,
        wrap: true
    })
    .pipe(uglify())
    .pipe(gulp.dest('.')); // pipe it to the output DIR
});

gulp.task('clean', [ 'clean:js', 'clean:css', 'clean:html' ],function () {
    return del([ distBasePath ]);
});

gulp.task('clean:js', function(){
    return del([ jsPath + '/*.js', jsPath ]);
});

gulp.task('clean:css', function(){
    return del([ cssPath + '/*.css', cssPath ]);
});

gulp.task('clean:html', function(){
    return del([ distBasePath + '/*.html' ]);
});

gulp.task('build', ['clean', 'requirejsBuild', 'sass', 'minify-html']);

gulp.task('default', ['serve']);
