const express = require("express");
const app = express();

const AllBooks = (req,res,next) => {
    console.log("Fetching All Books");
    next();
}
app.get("/books",AllBooks,(req,res) => {
    return res.send("All Books");
});

const SingleBook = (req,res,next) => {
    req.name = req.params.name;
    next();
}
app.get("/books/:name",SingleBook,(req,res) => {
    return res.send({"Book Name ":req.params.name})
});
app.listen(2300,() =>{
    console.log("on port 2300");
});