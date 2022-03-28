const express = require('express');

const route = express.Router();

const Todo =require("../model/todo.model")

route.post("",async(req,res) =>{
    try{

        let user = await Todo.findOne({eamil:req.body.email})
        if (!user) return res.status(400).send("wrong email and password")
        const todo = await Todo.create(req.body);

        return res.status(200).send({todo:todo});

    }catch(err){
        return res.status(400).send({message: err.message});
    }
});

route.get("",async(req,res) =>{
    try{
        const todo = await Todo.find().lean().exec();

        return res.status(200).send({todo:todo});

    }catch(err){
        return res.status(400).send({message: err.message});
    }
})


route.get("/:id",async(req,res) =>{
    try{
        let user = await Todo.findOne({eamil:req.body.email})
        if (!user) return res.status(401).send("wrong email and password")
        const todo = await Todo.findById().lean().exec();

        return res.status(200).send({todo:todo});

    }catch(err){
        return res.status(400).send({message: err.message});
    }
})

route.patch("/:id",async(req,res) =>{
    try{
        let user = await Todo.findOne({eamil:req.body.email})
        if (!user) return res.status(401).send("wrong email and password")
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();

        return res.status(200).send({todo:todo});

    }catch(err){
        return res.status(400).send({message: err.message});
    }
})

route.delete("/:id",async(req,res) =>{
    try{
        let user = await Todo.findOne({eamil:req.body.email})
        if (!user) return res.status(401).send("wrong email and password")
        const todo = await Todo.findByIdAndUpdate(req.params.id).lean().exec();

        return res.status(200).send({todo:todo});

    }catch(err){
        return res.status(400).send({message: err.message});
    }
})


module.exports =route;