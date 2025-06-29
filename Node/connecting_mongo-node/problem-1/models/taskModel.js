const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    dueDate:Date
})

const taskModel = mongoose.model("tasks",taskSchema)

module.exports = taskModel