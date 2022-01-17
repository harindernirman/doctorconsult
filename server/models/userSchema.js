const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    pemail: {
        type: String,
        required: true,
        unique:true
    },
    page: {
        type: String,
        required: true
    },
    pmobile: {
        type: Number,
        required: true
    },
    pproblem: {
        type: String,
        required: true
    },
    pstatus: {
        type: String,
        default: "waiting"
    }
})

const users = new mongoose.model("users", userSchema);

module.exports = users; 