var fs = require('fs');

let numNewLine = 0;

fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;
    data.filter(b => {
       if (b === 10) {
           numNewLine++;
       } 
    });
    console.log(numNewLine);
});