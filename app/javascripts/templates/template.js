/**
 * Created by Carlos on 1/10/15.
 */
define(['text!templates/main.html',
        'text!templates/movie-grid.html',
        'text!templates/movies-cell.html',
        'text!templates/movie-detail.html',
        'text!templates/movie-cast-layout.html',
        'text!templates/movie-cast-box.html',
        'text!templates/movie-images-layout.html',
        'text!templates/movie-image-box.html'],
    function(main, movieGrid, movieCell, movieDetail, castLayout, castBox, imagesLayout, imageBox){
    'use strict';

    return {
        main              : main,
        grid              : movieGrid,
        movieCell         : movieCell,
        movieDetail       : movieDetail,
        movieCastLayout   : castLayout,
        movieCastBox      : castBox,
        movieImagesLayout : imagesLayout,
        movieImageBox     : imageBox
    };
});
