const mongoose = require("mongoose");

const branchSchema = mongoose.Schema({
    name : { type: String, require: true },
    address: { type: String, reuire: true },
    IFSC : { type: String, require: true },
    MICR: { type: Number, require: true },
},{
    versionKey: false,
    timeStamps: true,

});

const Branch = mongoose.model("Branch",branchSchema);
module.exports = Branch;