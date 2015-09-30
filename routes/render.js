var express = require('express');
var router = express.Router();
var renderController = new (require('../controllers/Render'))();

/* GET movies listing. */
router.get('/', renderController.renderIndex);

module.exports = router;