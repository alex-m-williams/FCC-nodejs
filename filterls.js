var mymodule = require('./makeitmodular');

const dirName = process.argv[2];
const fileExt = process.argv[3];

mymodule(dirName, fileExt, (err, files) => {
    if (err) throw err;
    files.filter(file => {
       console.log(file); 
    });
});