const app = require("./index");
const connect = require("./config/db");

app.listen(2228, async function(){
    try{
        await connect();
        console.log("on port 2228");
    }
    catch(err){
        console.error(err.message);
    }
    
});