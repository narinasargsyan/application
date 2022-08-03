const express = require('express'); 
const rideController = require('../controller/ride'); 
const UserRideMapController = require('../controller/userRideMap'); 
const ride = new rideController(); 
const ridesRouter = new express.Router(); 
const userRideMap = new UserRideMapController(); 
ridesRouter.get('/create', ride.create); 
 
ridesRouter.post('/create/user', userRideMap.create); 
 
module.exports = ridesRouter;