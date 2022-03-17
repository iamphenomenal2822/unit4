const express = require("express");
const {body, validationResult} = require("express-validator");
const User = require("../models/user.models");
const router = express.Router();

router.post("/",body("first_name").trim().not().isEmpty().withMessage("To be filled"),
                body("last_name").trim().not().isEmpty().withMessage("To be filled"),
                body("email").isEmail().custom(async(value)=> {
                   const user = await User.findOne({email: value});
                    if(user){
                        throw new Error("Email is already taken");
                    }
                    return true;
                }),
                body("pincode").trim().not().isEmpty().withMessage("Cannot be Empty").isLength({min:6}).withMessage("Must be of 6 numbers"),
                body("age").not().isEmpty().withMessage("Cannot be Empty").isNumeric().withMessage("Must be between 1 to 100").custom((val) => {
                    if(val < 1 || val > 100){
                        throw new Error("Incorrect Age");
                    };
                    return true;
                }),
                async(req,res) => {
                    try{
                        console.log(body("first_name"));
                        const errors = validationResult(req);
                        console.log({errors});
                        if(!errors.isEmpty()){
                            return res.status(400).send({errors: errors.array()});
                        }
                        const user = await User.create(req.body);
                        return res.status(201).send(user);
                    }
                    catch(err){
                        return res.status(500).send({message: err.message});
                    }
                },
                );

module.exports = router;                
                
                