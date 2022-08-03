const registerMiddleware = (req,res,next) => { 
    const {name, surname, email, password, birthdate } = req.body; 
    if(typeof name !== 'string' || ( name[0] !== name[0].toUpperCase())) { 
       return res.status(400).json({message:"wrong name"}); 
    } 
    else if(typeof surname !== 'string' || ( surname[0] !== surname[0].toUpperCase())) { 
       return res.status(400).json({message:"wrong surname"}); 
   } 
    else if(typeof email !== 'string' || !email.includes('@')) { 
       return res.status(400).json({message:"wrong email"}); 
    } 
    else if(typeof password !== 'string' || !password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) )  { 
       return res.status(400).json({message:"wrong password"}); 
    }  
    else if(typeof birthdate !== 'string' || !birthdate.split('.')[0] || !birthdate.split('.')[1] || !birthdate.split('.')[2]) { 
        return res.status(400).json({message:"wrong birthdate"}); 
     } 
             
  
    next(); 
 }; 
  
 module.exports = { 
    registerMiddleware 
 };