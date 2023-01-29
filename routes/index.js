var express = require('express');
var router = express.Router();
const AuthMechController=require('../controllers/authMechController');

const langController = require('../controllers/langController');

router.post('/login', AuthMechController.login );
router.get('/logout',AuthMechController.logout);

router.get('/changeLang/:lang', langController.changeLang);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' });
});
module.exports = router;
