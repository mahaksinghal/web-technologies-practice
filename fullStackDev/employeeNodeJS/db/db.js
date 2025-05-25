const mongoose = require("mongoose");

// define mongoDB connection URL
const mongoURL = "mongodb://localhost:27017/employeeDB";

// to set up the connection to MongoDB
mongoose.connect(mongoURL);

// get default object and save it in a variable db
const db = mongoose.connection;

// if connection successful, then it generates a event connected
// so write its handler
db.on("connected", ()=>{
    console.log("connected to mongodb server");
})

// if connection successful, then it generates a event error
// so write its handler
db.on("error", (error)=>{
    console.log("Error" + error);
})

// if connection successful, then it generates a event disconnected
// so write its handler
db.on("disconnected", ()=>{
    console.log("disconnected to mongodb server");
})

module.exports = db;