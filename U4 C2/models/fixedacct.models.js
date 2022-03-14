const mongoose = require("mongoose");

const fixedacctSchema = mongoose.Schema({
    account_number : { type: Number, required: true, unique: true},
    balance: { type: Number, required: true},
    interestRate: { type: Number, required: true},
    startDate: { type: Number, required: true},
    maturityDate: { type: Number, required: true},
},{
    versionKey : false,
    timeStamps: true,
});

const fixed = mongoose.model("Fixed Account",fixedacctSchema);
module.exports = fixed;