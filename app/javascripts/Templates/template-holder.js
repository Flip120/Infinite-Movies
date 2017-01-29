/**
 * Created by Carlos on 1/10/15.
 */
define(['text!templates/main.html',
        'text!Templates/movie-grid.html',
        'text!Templates/movies-cell.html',
        'text!Templates/movie-detail.html',
        'text!Templates/movie-cast-layout.html',
        'text!Templates/movie-cast-box.html',
        'text!Templates/movie-images-layout.html',
        'text!Templates/movie-image-box.html'],
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

