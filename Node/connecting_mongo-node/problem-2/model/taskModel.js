const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: String,
    isCompleted: { type: Boolean, default: false },
    completionDate: Date,
    dueDate: Date,
})

const taskModel = mongoose.model("tasks",taskSchema)

module.exports = taskModel