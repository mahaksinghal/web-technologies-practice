const express = require("express");
const server = express();
const empRoutes = require("./routes/employeeRoutes");
// connect to mongodb
const db = require("./db/db");
const cors = require("cors");


server.use(cors());

server.use("/api/employee", empRoutes);

server.listen(4001, () => {
    console.log(`Server is running on port 4001`);
})