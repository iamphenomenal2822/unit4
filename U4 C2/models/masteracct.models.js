const mongoose = require("mongoose");

const masteracctSchema = mongoose.Schema({
    balance: {type: Number, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    branch_id: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    manager_id: {type: mongoose.Schema.Types.ObjectId, ref: "Branch"},
},{
    versionKey: false,
    timeStamps: true,
});

const Master = mongoose.model("Master",masterSchema);
module.exports = Master;