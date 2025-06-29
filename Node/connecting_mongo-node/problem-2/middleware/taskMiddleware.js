const TaskModel = require("../models/taskModel");

const validateTask = async (req, res, next) => {
  const { title, description, priority } = req.body
  const allowedPriorities = ["low", "medium", "high"]

  if (!title || !description || !priority) {
    return res.status(400).json({ error: "Incomplete Data Received" })
  }

  if (!allowedPriorities.includes(priority.toLowerCase())) {
    return res.status(400).json({ error: "Priority must be low, medium, or high" })
  }

  const existing = await TaskModel.findOne({ title })
  if (existing && req.method == "POST") {
    return res.status(409).json({ error: "Title must be unique" })
  }

  next()
};

module.exports = { validateTask };
