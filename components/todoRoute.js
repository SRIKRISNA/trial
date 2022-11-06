const express = require('express')
const userModule = require('../modals/userM');
const todoModule = require('../modals/todoM')
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/todotask", (req,res)=>{
    try{
        const udata= jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        userModule.find({userName:udata}).then((data)=>{
            if(data.length){
                todoModule.create({
                    activity:req.body.activity,
                    status:req.body.status,
                    timeTaken:req.body.timeTaken,
                    action:req.body.action
                }).then(()=>{
                    res.status(200).send("New activity added");
                })
            }else res.status(400).send("Unauthorized user...!")
        }).catch((err)=>{
            res.status(400).send(err);
        })
    }catch(err){
        res.status(400).send("Unauthorized user...");
    }
});

router.get("/todo", (req,res)=>{
    const udata = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    userModule.find({userName:udata}).then((data)=>{
        if(data.length){
            todoModule.find({activity:data}).then((data)=>{
                res.status(200).send({task:data});
            })
        }else res.status(400).send("Unauthorized user...!")
    })
});

module.exports = router;