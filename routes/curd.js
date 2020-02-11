//http://tutorialtous.com/mongoose/mongooseexamplesaving.php

var mongoose = require('mongoose');
var db = require('./connection');
var data = require('./data');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/savecredit', function(req, res, next) {
  console.log(req.body)
   

var callback = function(err,data){
  
  if(err){
    console.log(err);
    res.json(false)
  }
    
  else{
    console.log(data);
    res.json(true)
  }
    
    
}
var dts = new DataModel({amount:req.body.amount,date:req.body.date,description:req.body.description,status:req.body.status});

// var dts = new DataModel({amount:12451,date:'req.body.date',description:'req.body.description',status:'req.body.status'});

dts.save(callback); 
});
 

router.get('/displayall', function(req, res, next) {
    


DataModel.find({},function(err,data){
  
  if(err){
    console.log(err);
    return res.json([])
  }
    
  else
    console.log(data);
    // return res.json(data)
      
      DataModel.find({status:'credit'},function(err,data1){
  
      if(err){
        console.log(err);
        return res.json([])
      }
        
      else
        console.log(data1);
        var credittotal=0;
        for(var i=0;i<data1.length;i++){
          credittotal+=data1[i].amount
        }
        console.log(credittotal)
        DataModel.find({status:'debit'},function(err,data2){
  
          if(err){
            console.log(err);
            return res.json([])
          }
            
          else
          var debittotal=0;
        for(var i=0;i<data2.length;i++){
          debittotal+=data2[i].amount
        }
        console.log(debittotal)
            return res.json({data:data,credit:credittotal,debit:debittotal})
            
        } )
        
    } )
    
} );

    })

    
// router.get('/findstudent', function(req, res, next) {
    

//     var callback = function(err,data){
      
//       if(err)
//         console.log(err);
//       else
//         console.log(data);
//         return res.json(data)
        
//     } 
//     StudentModel.find({rollno:'100'},callback);
    
//         })

//   router.get('/findmarks', function(req, res, next) {
//        var callback = function(err,data){
            
//             if(err)
//               console.log(err);
//             else
//               console.log(data);
//               return res.json(data)
              
//           } 
//           StudentModel.find({$or:[ {'physics':45}, {'chemistry':45} ]},callback);
          
//               })        
module.exports = router; 


