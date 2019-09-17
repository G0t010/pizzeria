var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./pages/index', { title: 'Ma Pizzeria' });
});
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.render('./pages/commande', { title: 'Ma Pizzeria', commande:req.body });
});
module.exports = router;
