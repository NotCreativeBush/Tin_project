var express = require('express');
var router = express.Router();
const AuthMechController=require('../controllers/authMechController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' });
});
router.post('/login', AuthMechController.login );
router.get('/logout',AuthMechController.logout);


module.exports = router;
