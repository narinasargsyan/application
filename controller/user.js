const bcrypt = require("bcrypt"); 
const jwt = require('jsonwebtoken'); 
const secret = 'shhhh'; 
const fs = require('fs'); 
const models = require('../db/models'); 
const fetch = require('node-fetch'); 
 
 
class UserController { 
 
   register = async(req,res) =>  { 
      try { 
         const {name,surname,email,password,birthdate,phone} = req.body; 
         const salt = await bcrypt.genSalt(10); 
 
         const hashedPassword = await bcrypt.hash(password, salt); 
            await models.Users.create({  
               name:name, 
               surname:surname, 
               email:email, 
               password:hashedPassword, 
               birthdate:birthdate, 
               phone:phone 
            }) 
            res.send("you have successfully registered!"); 
      } catch (err) { 
            console.log('error=>', err); 
      } 
   } 
 
   login = async(req,res) => { 
      try{ 
         const {email,password} = req.body; 
      
         const user = await models.Users.findOne({ 
            where: { 
              email, 
            } 
         }); 
       
         if (!user) { 
           return res.status(404).send('user not exist'); 
         } 
 
         const math = await bcrypt.compare(password, user.password) 
       
         if (!math) { 
           return res.status(404).send('Credentials are invalid'); 
         } 
         const maxAge = 3 * 60 * 60; 
         const token = jwt.sign({id: user.id}, secret,{expiresIn:maxAge}); 
         return res.send({ token:token,name:user.name }); 
      } 
      catch(err){ 
         console.log('error=>', err); 
         res.send(err); 
      } 
       
   } 
    
   delete = async(req,res) => { 
      try{ 
         const user = await models.Users.findByPk(req.verifedUser.id); 
         if (user) { 
            await models.Users.destroy({ 
               where:{ 
                  id:req.verifedUser.id, 
            }}) 
            res.status(200).send("User is deleted"); 
         } 
         else{ 
             res.status(404); 
         } 
      } 
      catch(err){ 
         console.log('error=>', err); 
         res.send(err); 
      } 
   } 
 
   update =async(req,res) => {    
     try{ 
         const { name } = req.body; 
         const user = await models.Users.findByPk(req.verifedUser.id); 
          
         if (user){ 
            await models.Users.update({name:name},{ 
               where:{ 
                  id:req.verifedUser.id 
               } 
            }) 
            res.status(200).send("Update is done"); 
         } 
         else{ 
            res.status(404); 
         } 
 
     } 
     catch(err){ 
         console.log('error=>', err); 
         res.send(err); 
     } 
  }  
 
 
   getUsers = async(req,res) =>{   
      try{ 
         const users = await models.Users.findAll({ 
            include:[ 
               { model:models.Rides }, 
               { 
                  model:models.Comments, 
                  where:{ 
                     comment:'lalalal' 
                  }, 
                  required:false, 
               }, 
            ], 
         }); 
         res.send(users); 
      } 
      catch(err){ 
         console.log('error=>', err); 
         res.send(err); 
      } 
   } 
 
   findUser = async(req,res) => { 
      try{ 
         const user = await models.Users.findByPk(req.verifedUser.id); 
         res.send(user); 
      } 
      catch(err){ 
         console.log('error=>', err); 
         res.send(err); 
      } 
   } 
 
   findUsersByName = async(req,res) => { 
      try{ 
         const { name } = req.query; 
         const user = await models.Users.findOne({ 
            where: { 
               name, 
            } 
         }); 
         if(user){ 
            res.send(user); 
         } 
         else{ 
            res.status(404).send("User not exist"); 
         } 
      } 
      catch(err){ 
         console.log('error=>', err); 
         res.send(err); 
      }   
   } 
 
   findUsersByEmail = async(req,res) => { 
      try{ 
        const { email } = req.query;
        const user = await models.Users.findOne({ 
            where: { 
                email:email, 
            } 
        }); 
        if(user){ 
        res.send(user); 
        }   
        else{ 
            res.status(404).send("User not exist"); 
        }   
    }    
    catch(err){ 
    console.log('error=>', err); 
    res.send(err); 
    }   
    } 

    fakeUser = async function(req,res){ 
    try { 
    const { id } = req.body; 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); 
    const data = await response.json(); 
    console.log(data); 
    res.send(data); 
    } catch (err) { 
    console.log('error=>', err); 
    res.send(err); 
    }    
    } 

    insertDB = async function(req,res){ 
    try { 
    const { id } = req.body; 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); 
    const data = await response.json(); 
    console.log(data); 
    await models.Posts.create({  
    id:data.id, 
    userId:data.userId, 
    title:data.title, 
    body:data.body 
    }) 
    console.log(data); 
    res.send('done'); 
  
    } catch (err) { 
    console.log('error=>', err); 
    res.send(err); 
    } 

    } 

    insertBulk = async function (req,res) { 
    try { 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`); 
    const data = await response.json(); 
    let addressArr = []; 
    let companyArr = []; 
  
    for(let i = 0;i < data.length; i++){ 
    data[i].address.geo = `${data[i].address.geo.lat}, ${data[i].address.geo.lng}`;
    addressArr.push(data[i].address) 
    companyArr.push(data[i].company) 
    userArr.push(data[i].user) 
    } 
 console.log('addressArr', addressArr); 
  
  
  
 await models.Address.bulkCreate(addressArr); 
 await models.Company.bulkCreate(companyArr); 
  
 res.send(companyArr); 

} catch (err) { 
 console.log('error=>', err); 
 res.send(err); 
} 
} 

insertBulkUser = async function (req,res) { 
try { 
 const response = await fetch(`https://jsonplaceholder.typicode.com/users`); 
 const data = await response.json(); 
 const userArr = data.map(el => { 
    return { 
       name: el.name, 
       username: el.username, 
       email: el.email, 
       phone: el.phone, 
       website: el.website, 
    } 
 }) 

 await models.Users.bulkCreate(userArr); 
 res.send(userArr) 
} catch (err) { 
 console.log('error=>', err); 
 res.send(err) 
} 
} 
getBulkUser = async function (req,res) { 
try { 
 const users = await models.Users.findAll({ 
    include:[ 
       {  
          model: models.Address, 
       }, 
       { 
          model: models.Company, 
       }, 
    ], 
 }); 
  
 res.send(users); 
  
} catch (err) { 
 console.log('error=>', err); 
 res.send(err) 
} 
} 
addCompanyToUser = async function(req,res) { 
try { 

const  { companyId } = req.body; 

const user = await models.Users.findOne({ 
where:{ 
 id:req.verifedUser.id 
} 
}); 
if (user){ 
 await models.Users.update({companyId:companyId},{ 
    where:{ 
       id:req.verifedUser.id 
    } 
 }) 
 res.status(200).send("Update is done"); 
} 
} catch (err) { 
console.log('error=>', err); 
res.send(err); 
} 

} 

} 


module.exports = UserController;