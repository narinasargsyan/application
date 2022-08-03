const  express = require('express'); 
const app = express(); 
 
const bodyParser = require('body-parser'); 
const jsonParser = bodyParser.json({type:'*/*'}); 
 
const userRouter = require('./router/users'); 
 
const ridesRouter = require('./router/rides'); 
 
const commentRouter = require('./router/comments'); 
 
 
 
app.use(jsonParser); 
 
app.use('/users', userRouter); 
 
app.use('/rides', ridesRouter); 
 
app.use('/comments', commentRouter); 
 
 
 
app.listen('4041', 'localhost');