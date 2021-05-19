var post =require('../model/postSchema');

const add = function (req,res) {
    var data ={
        title:req.body.title,
        discription:req.body.discription,
        category:req.body.category
    }
    var user = new post(data);
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
    post.find(function (error,result) {
        if (error) {
            console.log(error)
            res.json(error)
        } else {
            console.log(result)
            res.json(result)
        }
    })
}
const showById = function (req,res) {
    const id = req.params.id
    post.findById(id,function(error,result){
        if (error) {
            console.log(error)
            res.json(error)
        } else {
            console.log(result)
            res.json(result)
        }
    })
}
const update = function (req,res) {
    const id = req.params.id
    var data ={
        title:req.body.title,
        discription:req.body.discription,
        category:req.body.category
    }
    post.findByIdAndUpdate(id,{$set:data},function (error,result) {
      
        if (error) {
            console.log(error)
            res.json(error)
        } else {
            console.log(result)
            res.json(result)
        }
    })

}
const deletepost = function (req,res) {
    var id = req.params.id;
    post.findByIdAndRemove(id,function (error,result) {
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
    deletepost
}