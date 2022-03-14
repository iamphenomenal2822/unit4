const mongoose = require("mongoose");
 
const saving = mongoose.Schema({
    account_number : { type:Number, required: true},
    balance: { type:Number, required: true},
    interest_rate: { type: Number, required: true},
},{
    versionKey: false,
    timeStamps: true,
});

const Saving_Account = mongoose.model("Saving Account",saving.Schema);
module.exports = Saving_Account;