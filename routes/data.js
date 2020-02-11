var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema= new Schema({
  amount:{type:Number,trim:true,required:true},
  date:{type:String,required:true},
  description:{type:String,required:true},
  status:{type:String,required:true}
   
},{collection:'data'});
DataModel = mongoose.model('data',dataSchema);

module.exports={DataModel}; 