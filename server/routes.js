var express = require('express');
var router = express.Router();

router.route('/register').post(function(req, res) {
  console.log('POSTED ');
  console.log(req.body);
  res.send({ message: 'Registered' });
});

router.use('/', express.static(__dirname + '/static'));

module.exports = router;