var User = require('../model/schema');
const index= function(req,res){
    
    var data ={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    }
    var user = new User(data);
    user.save(function(error,result){
        if (error) {
            console.log(error)
            res.json(error)
        } else {
            console.log(result)
            res.json(result)
        }
    })

    }
    
    module.exports={
        index,
    }