const express = require("express");

const User = require("../models/user.models");

const router = express.Router();

router.post("firstName").trim().not().isEmpty().withMessage("Name should be of min length 3 and maximum length 30");
router.post("age").not().isEmpty().withMessage("Field cannot be empty").isNumeric().withMessage("Age should be between 1 to 150")
.custom((value) => {
    if(value < 1 || value > 150){
        throw new Error("Incorrect age");
    }
    return true;
});

router.post("/multiple",upload.any("profileImage"),async(res,req) => {
    try{
        const filePaths = req.files.map((file) => {
            return file.path;
        });
        const user = await User.create({
            firstName : req.body.firstName,
            profileImage : filePaths,
        });
        return res.status(200).send(user);
    }
    catch(err){
         return res.status(500).send({message: err.message});
    }
});