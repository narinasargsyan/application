const models = require('../db/models'); 
 
class RideController { 
 
 
   create = async(req,res) => { 
      const {driverName,driverVehicle,startLong,startLat,endLat,endLong,rideComment} = req.body; 
      await models.Rides.create({ 
         driverName :driverName , 
         driverVehicle : driverVehicle, 
         startLong : startLong, 
         startLat : startLat, 
         endLat :endLat , 
         endLong : endLong, 
         rideComment: rideComment 
       })  
      res.send('done'); 
   } 
} 
module.exports = RideController;