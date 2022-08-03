const models = require('../db/models'); 
 
class CommentController { 
 
   create = async (req, res) => { 
      const { comment } = req.body; 
      const user = await models.Users.findOne({ 
         where: { 
           id: req.verifedUser.id 
         } 
      }); 
      if(user){ 
         await models.Comments.create({ 
            userId: user.id, 
            comment: comment, 
         }) 
         res.send('done'); 
      } 
   } 
} 
module.exports = CommentController;

