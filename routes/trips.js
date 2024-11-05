var express = require('express');
var router = express.Router();

/* GET trips. */
router.get('/trips', function(req, res, next) {
  res.render('trips', { title: 'Express' });
});

module.exports = router;
