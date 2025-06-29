const TaskModel = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    const existing = await TaskModel.findOne({ title });
    if (existing) {
      return res.status(409).json({ message: "Task title must be unique" });
    }

    const newTask = new TaskModel({ ...req.body });
    await newTask.save();
    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

const getTasks = async (req, res) => {
  try {
    const { priority, isCompleted } = req.query;
    const filter = {};

    if (priority) filter.priority = priority;
    if (isCompleted) filter.isCompleted = isCompleted === "true";

    const tasks = await TaskModel.find(filter);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.isCompleted === true || updates.isCompleted == "true") {
      updates.completionDate = new Date();
    }

    const updated = await TaskModel.findByIdAndUpdate(id, updates, { new: true });
    if (!updated) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task updated successfully", updated });
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

const deleteTasksByPriority = async (req, res) => {
  try {
    const { priority } = req.query;

    if (!priority) {
      return res.status(400).json({ message: "Priority query is required" });
    }

    const result = await TaskModel.deleteMany({ priority });
    res.status(200).json({ message: `${result.deletedCount} tasks deleted.` });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete tasks" });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTasksByPriority,
};
