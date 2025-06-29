const mongooes = require("mongoose")

const connectToDb = async()=>{
    try{
        await mongooes.connect("mongodb://localhost:27017/")
        console.log("connection Successfull")
    }catch (err){
        console.log("error in connectiong")
    }
}
module.exports = connectToDb