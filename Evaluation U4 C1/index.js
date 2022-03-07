const express = require("express");
const app = express();

app.use(logger);
app.get("/books",(req,res) => {
    return res.send({route:"/books"});
});
app.use(checkPermission);
app.get("/libraries",(req,res) => {
    return res.send({route:"/libraries",permission:true});
});
app.get("/authors",(req,res) => {
    return res.send({route:"/authors",permission:true});
});
function logger(req,res,next){
    console.log("before route handle");
    next();
    console.log("after route handle");
}

function checkPermission (req,res,next){
      if("/libraries"){
          console.log("librarian");
      }
    //   next();
      else{
        if("/authors"){
            console.log("author")
        }
      } 
      next();
}
app.listen(2212,() => {
    console.log("Listening on port 2212");
});