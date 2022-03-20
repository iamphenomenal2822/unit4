const app = require("./index");
const connect = require("./configs/db");

app.listen(5884, async function () {
    try{
        await connect();
        console.log("listening on port 5884");
    }
    catch(err){
        console.log(err.message);
    }
});