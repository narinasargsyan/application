const express = require('express'); 
const jwt = require('jsonwebtoken'); 
const secret = 'shhhh'; 
const UserController = require('../controller/user'); 
const { 
    registerMiddleware,
    nameValidator,
    surnameValidator,
    emailValidator,
    phoneValidator,
} = require('..middleware/middleware'); 
const user = new UserController(); 
const userRouter = express.Router(); 

userRouter.post("/signup", registerMiddleware, user.register); 
 
userRouter.post("/login", user.login); 
userRouter.use( function(req,res,next){
    const verifed = jwt.verify(req.headers.authorization, secret);
    req.verifedUser = verifed;
    console.log(verifed);
    next();
 });
 
userRouter.delete("/delete", user.delete); 
userRouter.put("/update", [nameValidator, surnameValidator, emailValidator,phoneValidator], user.update); 
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