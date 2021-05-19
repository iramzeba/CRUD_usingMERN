var jwt = require('jsonwebtoken');
var configS= require("../middleware/secret")

const VerifyJWT =function (req,res,next) {
    let token= req.headers.authorization||req.headers['x-access-token'];

  //  if (Header) {
       // var token = Header.split(' ')[1];
       
       if(!token){
           console.log("no token provided")
           return res.status(403).send({
               message:"No token provided"
           })
       }
        if(token.startsWith('Bearer')){
          token = token.slice(6, token.length)
         console.log(token)
       // }
        jwt.verify(token, configS.JWT_SECRET,(err,user)=>{
            if (err) {
                console.log(err)
                return res.status(401).send(err)
              
            } 
                req.user=user;
                next();
        });
      } 
      //else{
    //      console.log("no token provided")
    //     res.sendStatus(401)

    //             }
        
    }

    module.exports = {
        VerifyJWT,
    }


