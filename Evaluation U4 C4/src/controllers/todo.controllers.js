const express = require("express");
const router = express.Router();

const Todo = require("../models/todo.models");
const User = require("../models/user.models");

router.post("",async(req,res)=>{
   
    try{
        const todo = await Todo.create(req.body);
        const todos = await ZTodo.find().lean().exec();
        client.set("todos",JSON.stringify(todos));
        return res.status(201).send(todo);
    }
    catch(err){
        return res.status(401).send({message: err.message});
    }
});

router.get("",async(req,res)=>{
    try{
        client.get("todos",async function (err,getTodo){
            if(getTodo){
                const todos = JSON.parse(getTodo);
                return res.status(200).send({todos});
            }
            else{
                try{
                    const todos = await todo.find().lean().exec();
                    client.set("todos",JSON.stringify(todos));
                    return res.status(200).send({todo});
                }catch(err){
                    return res.status(401).send({message:err.message});
                }
            }
             
        });
    } catch(err){
        return res.status(401).send({message:err.message});
    }
});


router.get("/:id",async(req,res)=>{
    try{
        client.get(`todos.${req.params.id}`,async function(err,fetchedTodo){
            if(fetchedTodo){
                const todo = JSON.parse(fetchedTodo);
                return res.status(200).send({todo});
            }
            else{
                try{
                    const todo = await Todo.findById(req.params.id).lean().exec();
                    client.set(`todos.${req.params.id}`,JSON.stringify(todo));
                    return res.status(200).send({todo})
                }
                catch(err){
                    return res.status(401).send({message:err.message});
                }
            }
        });
    }
    catch(err){
        res.status(401).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        .lean()
        .exec();
        const todos = await Todo.find().lean().exec();
        client.set(`todos.${req.params.id}`,JSON.stringify(todo));
        client.set("todos",JSON.stringify(todos));
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(401).send({message:err.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findOneAndDelete(req.params.id).lean().exec();
        const todos = await todo.find().lean().exec();
        client.del(`todos.${req.params.id}`);
        client.set("todos",JSON.stringify(todos));
        return res.status(200).send(todo);
    }catch(err){
        return res.status(401).send({message:err.message});
    }
});

module.exports = router;
