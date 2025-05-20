const express = require("express")
var server = express();
const bodyparser = require("body-parser");

server.use(bodyparser.urlencoded({extended:false}));


server.use((req, resp, next)=>{
    console.log(req.url + "--------" + req.method);
    next();
})

server.get("/home" ,(request, response) => {
    str = "<h1>Welcome</h1>"
    response.send(str);
})

server.get("/addForm", (request, response)=>{
    console.log("form");
    response.sendFile("/html files/additionForm.html", {root:__dirname});
})

server.post("/submit-data", (request, response)=>{
    var num1 = parseInt(request.body.num1);
    var num2 = parseInt(request.body.num2);
    var ans = num1 + num2;
    response.send(`<div>Num1: ${request.body.num1} <br> Num2: ${request.body.num2} <br> Ans: ${ans} </div>`);
})



server.listen(5000, ()=>{
    console.log("running on port 5000")
})