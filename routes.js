var express = require('express');
var router = express.Router();
var student = require('./Models/movies')



//api to fetch data
router.get('/deta',async(req,res)=>{
    const stud = await student.find()
    res.send(stud)
})



//api to add data
router.post("/deta",async(req,res)=>{
    const stud = new student({
        name:req.body.name,
        er:req.body.er,
        branch:req.body.branch
    })
    await stud.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



// api for updating
router.patch('/deta/:id',async (req,res)=>{
    const stud = await student.findOne({_id:req.params.id})
    stud.name = req.body.name
    stud.er = req.body.er
    stud.branch=req.body.branch
    await stud.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



//delete api
router.delete("/deta/:name",async(req,res)=>{
    await student.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })
})
module.exports = router 