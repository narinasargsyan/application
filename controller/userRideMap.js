const models = require('../db/models'); 
 
 class UserRideMapController { 
 
    create = async (req, res) => { 
       const { userId, rideId } = req.body; 
       await models.UserRideMap.create({ 
          userId, 
          rideId, 
       }) 
       res.send('done'); 
    } 
 } 
 module.exports = UserRideMapController;