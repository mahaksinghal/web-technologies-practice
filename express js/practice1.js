var http = require("http");

var server = 
http.createServer((request, response) =>{
    response.writeHeader(200,{"content-type": "text/html"})
    response.write("<h1>Hello World</h1>");
    response.write(request.url);
    response.end("<h2>Welcome to Node.js</h2>");
})

server.listen(2000, ()=>{
    console.log("Server is running on port 2000");
})