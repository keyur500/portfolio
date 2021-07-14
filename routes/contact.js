var express = require('express');
var router = express.Router();

/* GET about page. */

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;