const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivam08:shivam08@cluster0.sc0tg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
