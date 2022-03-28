const todo = require("../models/todo.models");
const user = require("../models/user.models");

const router = express.Router();
router.poster("",async(req,res) => {
    try{
        const todo = await todo.create(req.body);
        const todos = await todo.find().lean().exec();
        client.set("todos",JSON,stringfy(todos));
        return res.status(201).send(todo);
    }
    catch(err){
        return res.status(401).send({message:err.messasge});
    }
});

router.get("",async(req,res) => {
    try{
        client.get("todos",async function(error,gettodo){
            if(gettodo){
                const todos = JSON.parse(gettodo);
                return res.status(200).send({todos});
            }
            else{
                try{
                  const todos = await todo.find().lean().exec();
                  client.set("todos",JSON.stringfy(todos));
                  return res.status(200).send({todos, redis: false});
                }
                catch(err){
                   return res.status(500).send({message: err.message});
                }
            }
        });
    }
    catch(err){
        return res.status(401).send({message:err.message});
    }
});
router.get("/:id",async(req,res) => {
    try{
        client.get(`todos.${req,params.id}`,async function(err,fetchtodo){
            if(fetchtodo){
                const todo = JSON.parse(fetchedtodo);
                return res.status(200).send({todo, redis: true});
            }
            else{
                try{
                    const todo = await todo.findById(req.params.id).lean().exec();
                    client.set(`todos.${req.params.id}`,JSON.stringify(todo));
                    return res.status(200).send({ todo, redis: false});
                }
                catch(err){
                    return res.status(401).send({message:err.message});
                }
            }
        });
    }
    catch(err){
        return res.status(401).send({messasge:err.message});
    }
});

router.patch("/:id",async(req,res) => {
    try{
        const todo = await todo.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
        })
        .lean().exec();
        const todos = await todo.find().lean().exec();
        client.set(`todos.${req.params.id}`,JSON.stringify(todo));
        client.set("todos",JSON.stringify(todos));
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(401).send({message:err.message});
    }
});

router.delete("/:id",async(req,res) => {
    try{
        const todo = await todo.findByIdAndDelete(req.params.id).lean().exec();
        const todos = await todo.find().lean().exec();
        client.del(`todos.${req.params.id}`);
        client.set("todos",JSON.stringify(todos));

        return res.status(200).send(todo);
    }
    catch(err){
        res.status(401).send({message:err.message});
    }
});