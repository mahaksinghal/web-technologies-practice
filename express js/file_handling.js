const fs = require("fs");

// synchronous file
// fs.writeFileSync("./test.txt", "Hey there!");

// asynchronous file
// fs.writeFile("./test.txt", "Hey there async!", (err)=>{});

// to read a file
// const data = fs.readFileSync("./test.txt", "utf-8")

// console.log(data);

// to read a file asynchronously
// fs.readFile('./test.txt', 'utf-8', (error, data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })

// to append in a file without overwriting the entire file
fs.appendFileSync("./test.txt", `This is the appended text\n`);
