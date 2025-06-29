const express = require("express")
const connectToDB = require("../problem-1/config/dbConfig")

const app = express()
app.use(express.json())

connectToDB()

app.use("/tasks", taskRouter);

app.use(("/"), (req, res) => {
    console.log("Welcome task manager")
    res.send("Welcome to Task Manager API");
})
app.use((req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, (req, res) => {
    console.log("Starting server on node....")
})