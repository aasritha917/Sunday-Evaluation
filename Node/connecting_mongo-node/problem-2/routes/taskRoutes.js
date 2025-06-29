const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTasks,
} = require("../controller/taskController");
const { validateTask } = require("../middleware/taskMiddleware");

app.use("/tasks", taskRouter);
router.post("/", validateTask, createTask);
router.get("/", getTasks);
router.patch("/:id", validateTask, updateTask);
router.delete("/", deleteTasks);

module.exports = router;
