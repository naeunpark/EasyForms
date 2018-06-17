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
//api/about
router.get('/about', function(req, res, next) {
  res.locals.connection.query('select * from about', function (error, results, fields) {
    if(error) throw error;
    res.send(JSON.stringify(results));
  });
});

module.exports = router;

