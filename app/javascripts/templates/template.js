/**
 * Created by Carlos on 1/10/15.
 */
define(['text!templates/main.html',
        'text!templates/movie-grid.html',
        'text!templates/movies-cell.html',],
    function(main, movieGrid, movieCell){
    'use strict';

    return {
        main       : main,
        grid       : movieGrid,
        movieCell  : movieCell
    };
});
