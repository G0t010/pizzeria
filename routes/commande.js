var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/commande', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('./pages/commande', { title: 'Express' });
});

module.exports = router;
