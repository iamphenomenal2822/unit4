const express = require("express");
const user =  require("../models/user.models");
const router = express.Router();

router.post("",async (req,res) => {
    try{
        const user = await user.create(req.body);
        return res.status(201).send(user);
    }
    catch(err){
        return res.send("message error");
    };
});

router.get("",async (req,res) => {
    try{
        const user = await user.find().lean.exec();
        return res.status(201).send(user);
    }catch(err){
        return res.send("message error");
    };
});

module.exports = router;