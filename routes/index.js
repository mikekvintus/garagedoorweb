var config = require('../config');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Garage Door App', SPARK_TOKEN: config.SPARK_TOKEN, PHOTON_DEVICE_ID: config.PHOTON_DEVICE_ID });
});

module.exports = router;
