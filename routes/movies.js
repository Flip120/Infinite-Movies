var express = require('express');
var router = express.Router();
var movieController = new (require('../controllers/Movies'))();

/* GET movies listing. */
router.get('/', movieController.getMovies);

/* GET movie detail. */
router.get('/:movieId', movieController.getMovieDetail);

module.exports = router;
