const TaskModel = require("../models/taskModel");

const createTask = async (req, res) => {
    try {
        const task = new TaskModel(req.body);
        await task.save();
        res.status(201).json({ message: "Task created", task });
    } catch (err) {
        res.status(500).json({ error: "Failed to create task" });
    }
};

const getTasks = async (req, res) => {
    try {
        const { status, dueDate } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (dueDate) filter.dueDate = dueDate;
        const tasks = await TaskModel.find(filter);
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await TaskModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task updated", updated });
    } catch (err) {
        res.status(500).json({ error: "Failed to update task" });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TaskModel.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete task" });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
};
