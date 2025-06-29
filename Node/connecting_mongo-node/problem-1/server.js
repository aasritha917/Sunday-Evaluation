const express = require("express")
const connectToDB = require("./config/dbConfig")
const taskRouter = require("./routers/taskRouter")

const app = express()

app.use(express.json());
app.use("/task", taskRouter)
connectToDB()

app.get("/", (req, res) => {
    console.log("welcome to task management")
})
app.listen(3000, () => {
    console.log("server is starting....")
})