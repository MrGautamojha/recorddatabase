const mongoose=require("mongoose")
var url='mongodb://localhost:27017/data'
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true},function(err){

  if(!err){
    console.log("Connected MONGO")
  }
  else
  {Console.log("FAil to Connect")}
 });
