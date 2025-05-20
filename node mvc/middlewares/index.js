const fs = require("fs");

function logReqRes(fileName) {
    return (req, resp, next) =>{
        fs.appendFile(fileName, `\n${Date.now()}: ${req.method}`,
        (err, data) => {
            console.log("hello from middleware 1");
            next();
        });
    }
}

module.exports = {logReqRes}