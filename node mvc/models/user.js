// connect to mongodb
const mongoose = require("mongoose");

// Scehma
const userSchema = new mongoose.Schema({
    first_name: {
        type: String, required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String, required: true, unique: true
    },
    job_title: {
        type: String
    },
    gender: {
        type: String
    }
}, { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
