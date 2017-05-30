var express = require('express');
var router = express.Router();
 userHandlers = require('../controllers/userController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/register', userHandlers.register);
router.get('/login', function(req, res){
res.render('login');
});
router.post('/sign-in', userHandlers.sign_in);
router.get('/private', userHandlers.loginRequired, function(req, res, next){
  console.log("aasssssssassaasassasffaa");
  res.render('index');
});

module.exports = router;
