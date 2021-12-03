const express=require("express");
const bodyparser=require('body-parser');

const placesRoutes=require('./routes/vm-routes');

const cors = require('cors');
const commentController=require('./controllers/vmController')

//const {MongoClient}=require('./db.js');

const path = require('path');
 const PORT = process.env.PORT || 80;
  var app = express()
  app.use(cors()) 
  app.use('/', express.static(path.join(__dirname, "Angular")));
   app.use(express.json())


// const app=express();
app.use(cors())
// app.use(bodyparser.json());
app.use('/api/vm',placesRoutes);
// app.use('/api/users',userRoutes);
app.listen(PORT,()=>

{
    console.log("running is done");
});











