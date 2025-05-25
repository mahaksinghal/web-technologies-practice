const express = require("express");
const server = express();

const bodyParser = require("body-parser");



server.listen(4001, () => {
    console.log(`Server is running on port 4001`);
})