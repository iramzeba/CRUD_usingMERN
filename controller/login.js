var User = require('../model/schema');
var jwt = require('jsonwebtoken');

const index= function(req,res){
    var email = req.body.email;
    var password= req.body.password;
   
User.findOne({email:email,password:password},function(error,result){
    if (error ) {
        return res.status(500).send('error')
    }
        if(!result)
        { return res.status(404).send('no user found')
           
        }
     else {
        console.log(result)
       
      const payload = {
        email:result.email};
        const options = {
            expiresIn: 60 * 60 * 60};
         
           
            const secret= "MyAwesomeSuperSecret"
            const token = jwt.sign(payload,secret,options)
        console.log(token)

      
          res.status(200).send({result,token})
   
    }
})



}

module.exports={
    index,
    
}