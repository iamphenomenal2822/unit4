const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://shivam08:shivam08@cluster0.sc0tg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
module.exports = connect;