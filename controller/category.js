const category = require('../model/categorySchema');

const add = function(req,res){
 
    var data ={
        name:req.body.name,
        discription:req.body.discription,
      
    }

    var user = new category(data);
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

const show = function (req,res) {
    category.find(function (error,result) {
        if (error) {
            console.log(error)
            res.json(error)
        } else {
            console.log(result)
            res.json(result)
        }
    })
}

const showById=function (req,res) {
    const id = req.params.id
    category.findById(id,function(error,result){
        if (error) {
            console.log(error)
            res.json(error)
        } else {
            console.log(result)
            res.json(result)
        }
    })

}


const update =function (req,res) {
    id = req.params.id;
    var data ={
        name:req.body.name,
        discription:req.body.discription,
      
    }
    category.findByIdAndUpdate(id,{$set:data},function (error,result) {
      
        if (error) {
            console.log(error)
            res.json(error)
        } else {
            console.log(result)
            res.json(result)
        }
    })
}

const deletecategory = function (req,res) {
    var id = req.params.id;
    category.findByIdAndRemove(id,function (error,result) {
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
    add,
    show,
    showById,
    update,
    deletecategory
}