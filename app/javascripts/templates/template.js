/**
 * Created by Carlos on 1/10/15.
 */
define(['text!templates/main.html',
        'text!templates/movies-cell.html'],
    function(main, movieCell){
    'use strict';

    return {
        main       : main,
        movieCell  : movieCell
    };
});
