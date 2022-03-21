const app = require("./index");
const connect = require("./configs/db");

app.listen(3019, async function () {
    try{
        await connect();
        console.log("listening on port 3019");
    }
    catch(err){
        console.error(err.message);
    }
});