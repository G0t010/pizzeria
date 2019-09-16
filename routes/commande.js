var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/commande', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('commande', { title: 'Express' });
});

module.exports = router;
