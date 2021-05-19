var mongoose=require('mongoose');
var userSchema =new mongoose.Schema({

title:{
    type:String,
    required:true
},
discription:{
    type:String
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category',
    required:true
    
},
create_date:{
    type:Date,
    default:Date.now
}






})
var post=mongoose.model('post',userSchema);
module.exports=post;