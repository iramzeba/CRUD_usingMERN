var mongoose=require('mongoose');
var userSchema =new mongoose.Schema({

name:{
    type:String,
    required:true
},
discription:{
    type:String,
    required:true
}






})
var category=mongoose.model('category',userSchema);
module.exports=category;