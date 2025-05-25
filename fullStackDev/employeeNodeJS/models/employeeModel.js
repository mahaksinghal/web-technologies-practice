const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    gender: {type: String}, 
    salary: {type: Number, required: true},
    jobTitle: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone_no: {type: Number, required: true, unique: true},
})



module.exports = mongoose.model("Employee", employeeSchema)