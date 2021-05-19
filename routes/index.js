var express = require('express');
var loginC= require('../controller/login');
var RegisC= require('../controller/register');
var categoryC =require('../controller/category');
var postC =require('../controller/post');
var VerifyJWT = require('../middleware/token').VerifyJWT; 
var router = express.Router();




router.post('/register',RegisC.index);
router.post('/login',loginC.index);

//category
router.post('/category',VerifyJWT,categoryC.add);
router.get('/category',VerifyJWT,categoryC.show);
router.get('/category/:id',VerifyJWT,categoryC.showById);
router.post('/category/:id',VerifyJWT,categoryC.update);
router.delete('/category/:id',VerifyJWT,categoryC.deletecategory);

//post
router.post('/post',VerifyJWT,postC.add);
router.get('/post',VerifyJWT,postC.show);
router.get('/post/:id',VerifyJWT,postC.showById);
router.put('/post/:id',VerifyJWT,postC.update);
router.delete('/post/:id',VerifyJWT,postC.deletepost);


module.exports = router;
