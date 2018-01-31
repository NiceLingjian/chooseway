var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/activity/divine', function(req, res, next) {
  res.render('divine', { title: 'divine' });
});

module.exports = router;
