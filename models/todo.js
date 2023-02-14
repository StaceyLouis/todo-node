const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    post:{
        required: true,
        type: String
    },
    completed:{
        type: Boolean
    },
    deleted:{
        type: Boolean
    }
})

module.exports = mongoose.model("Todo", todoSchema)