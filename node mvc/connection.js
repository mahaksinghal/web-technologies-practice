const mongoose = require("mongoose");

async function connectMongoDB(url) {
    // connection
    return mongoose.connect(url)
        .then(() => console.log("mongodb connected"))
        .catch((err) => console.log("mongodb error", err));
}

module.exports = {
    connectMongoDB
}