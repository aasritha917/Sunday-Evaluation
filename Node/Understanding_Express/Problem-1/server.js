const express = require("express")

const app = express()

app.get("/home", (req, res) => {
    res.send(`<p>Welcome to home page</p>`)
})
app.get("/aboutus", (req, res) => {
    res.status(200).json({ "message": "Welcome to About Us" })
})
app.get("/contactus", (req, res) => {
    res.status(200).json({
        name: "Aasritha Support",
        email: "support@example.com",
        phone: "+91-9876543210"
    });
});
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
    console.log("Server starts on node 3000")
})