 var express = require('express');
 var router = express.Router();

 router.get('/',function(req,res){
 	res.send("<h1>Test This Second Node App With Express</h1>")
 });

 module.exports = router;