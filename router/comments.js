const express = require('express'); 
const commentController = require('../controller/comment'); 
const jwt = require("jsonwebtoken"); 
const comment = new commentController(); 
const commentRouter = new express.Router(); 
const secret = 'shhhh'; 
 
commentRouter.use( function(req,res,next){ 
    const verifed = jwt.verify(req.headers.authorization, secret); 
    req.verifedUser = verifed; 
    console.log(verifed); 
    next(); 
 }); 
  
commentRouter.post('/create', comment.create); 
 
module.exports = commentRouter;