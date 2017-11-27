var fs = require('fs');

let buf = fs.readFile(process.argv[2]);
let numNewLine = process.argv[3];
buf.filter(b => {
   if (b === 10) {
       numNewLine++;
   } 
});

console.log(numNewLine);