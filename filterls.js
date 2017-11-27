var fs = require('fs');

const dirName = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(dirName, (err, files) => {
    if (err) throw err;
    files.filter(file => {
       if  (file.substr(file.length - 3, file.length) == ('.' + fileExt)) {
            console.log(file);
       }
    });
});