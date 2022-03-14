const express = require("express");
const app = express();

const connect = require("./config/db");

app.use(express.json());
app.use("/user",userRoute);
app.use("/bank",bankRoute);
app.use("/master",masterRoute);
app.use("/fixed",fixedRoute);


app.listen(5155, async () => { 
    try{
        await connect ();
        console.log("on port 5155");
    }
    catch(err){
        console.log("Server Crashed");
    }
});

