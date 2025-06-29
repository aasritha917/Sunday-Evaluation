const mongoose = require("mongoose")

const connectToDB = async() => {
    try {
       await mongoose.connect("mongodb://localhost:27017/")
       console.log("connection successful")
    } catch (err) {
        console.log("erroe in connectiong")
    }
}
module.exports = connectToDB