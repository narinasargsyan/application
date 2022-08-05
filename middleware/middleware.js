const { body, validationResult } = require('express-validator');

const registerMiddleware = async (req,res,next) => { 
    await body("username").isLength().run(req);
    await body("surname").isLength({ min: 5 }).run(req);
    await body("password").isLength({ min: 5 }).run(req);
    await body("name").isLength({ min: 5 }).run(req);
    await body("phone").isLength({ min: 5 }).run(req);
    await body("email").isEmail().run(req);
    await body("birthdate").isDate({format: 'DD-MM-YYYY'}).run(req);
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next(); 
}; 

const  nameValidator = async (req,res,next) => { 
   await body("name").isLength({ min: 5 }).run(req);
   
   const errors = validationResult(req);
   
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   next(); 
}; 
  
const  surnameValidator = async (req,res,next) => { 
   await body("surname").isLength({ min: 5 }).run(req);
   
   const errors = validationResult(req);
   
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   next(); 
}; 

const  emailValidator = async (req,res,next) => { 
   await body("email").isEmail().run(req);
   
   const errors = validationResult(req);
   
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   next(); 
}; 

const  phoneValidator = async (req,res,next) => { 
   await body("phone").isLength({ min: 8 }).run(req);
   
   const errors = validationResult(req);
   
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   next(); 
}; 

 module.exports = {
   registerMiddleware,
   nameValidator,
   surnameValidator,
   emailValidator,
   phoneValidator,
 };

 




