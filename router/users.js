const express = require('express'); 
const UserController = require('../controller/user'); 
const configs = require('../config/configs'); 
const jwt = require("jsonwebtoken"); 
const registerMiddleware = require('./middleware'); 
const fetch = require('node-fetch'); 
const user = new UserController(); 
const secret = 'shhhh'; 
const userRouter = express.Router(); 
 
userRouter.post("/signup",  user.register); 
 
userRouter.post("/login",user.login); 
 
// userRouter.use( function(req,res,next){ 
//    const verifed = jwt.verify(req.headers.authorization, secret); 
//    req.verifedUser = verifed; 
//    console.log(verifed); 
//    next(); 
// }); 
 
userRouter.delete("/delete", user.delete); 
userRouter.put("/update", user.update); 
 
userRouter.get("/getUser", user.getUsers); 
userRouter.get("/token", user.findUser); 
userRouter.get("/findName", user.findUsersByName); 
userRouter.get("/findEmail", user.findUsersByEmail); 
userRouter.get("/fake",user.fakeUser); 
userRouter.post("/insert",user.insertDB); 
userRouter.post('/address', user.insertBulk); 
userRouter.post('/user', user.insertBulkUser); 
userRouter.get('/getInclude',user.getBulkUser); 
userRouter.get('/addCompany', user.addCompanyToUser); 
 
module.exports = userRouter;