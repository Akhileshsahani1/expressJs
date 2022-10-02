var express = require('express');
var router = express.Router();
const {
    check, validationResult
}
= require('express-validator');


var AuthController = require('../Controllers/AuthController');

/* GET home page. */
router.get('/', function(req, res, next) { res.render('index', { title: 'Express' }); });

router.post('/create', [check('email', 'Email length should be 10 to 30 characters') 
.isEmail().isLength({ min: 10, max: 30 }), 
check('name', 'Name length should be 10 to 20 characters')
   .isLength({ min: 8, max: 10 }) ],AuthController.create);

router.put('/dataup',
[check('email', 'Email length should be 10 to 30 characters') .isEmail().isLength({ min: 10, max: 30 }), 
    
    check('password','password must be 8 to 10 character').isLength({8:10})
  ],



AuthController.dataup);
router.delete('/delet', AuthController.userdelete);
router.get('/alldata', AuthController.allusers);


module.exports = router;
