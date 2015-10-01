var express = require('express');
var router = express.Router();
var configController = new (require('../controllers/Configuration'))();

/* GET movies listing. */
router.get('/', configController.getApiConfiguration);

module.exports = router;
