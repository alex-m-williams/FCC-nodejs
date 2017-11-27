var fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let numNewLine = 0;
buf.filter(b => {
   if (b === 10) {
       numNewLine++;
   } 
});

console.log(numNewLine);