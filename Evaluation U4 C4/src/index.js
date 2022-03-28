const express = require("express");
const app = express();

const connect = require("./configs/db");
const userController = require("./controllers/user.controllers");
const todoController = require("./controllers/todo.controllers");

app.use(express.json());

app.use("/todos",todoController);
app.use("/user",userController);
app.listen(9874,async()=>{
    try{
        console.log("on port 9874");
    }
       catch(err){
            console.log(err);
       }
});

module.exports = app;