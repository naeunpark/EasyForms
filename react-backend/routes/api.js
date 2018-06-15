var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "somebody"
  }, {
    id: 2,
    username: "somebody_else"
  }]);
});

/* GET users listing. */
//users/about
router.get('/about', function(req, res, next) {
  res.json([{
    id: 3,
    username: "sophia"
  }, {
    id: 4,
    username: "Jenny"
  }]);
});

module.exports = router;

