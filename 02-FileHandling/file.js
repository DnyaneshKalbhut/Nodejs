
const fs = require("fs")

const os = require("os")

console.log(os.cpus().length);

// Synchronus 
// fs.writeFileSync("./test.txt","hello there dnyaesh");

// Asynchronous
// fs.writeFile("./text.txt","from ASync filewriter",(error)=>{})


// const result= fs.readFileSync("./contact.txt","utf-8");

// console.log(result);


// Sync will return value in variable
//but Asynchronous always need an callback function to return a result


// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })


// fs.appendFileSync("./test.txt",`hello there \n ${Date.now()}`);

// fs.cpSync("./test.txt","./copy.txt");

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./text.txt"));