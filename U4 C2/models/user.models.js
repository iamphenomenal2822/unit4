const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: { type: String, require: true},
    lastName: { type: String, require: true},
    age:{ type: Number, require: true},
    email: { type: String, require: true},
    address: { type: String, require: true},
    gender: { type: String, require: false, default: "Female"},
},{
    versionKey: false,
    timestamps: true,

});

const User = mongoose.model("User",userSchema);
module.exports = User