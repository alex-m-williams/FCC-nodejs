let fs = require('fs');

module.exports = function(dir, ext, callback) {
    let data = [];
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err)
        files.filter(file => {
       if  (file.substr(file.length - 3, file.length) == ('.' + ext)) {
            data.push(file);
       }
    });
        callback(null, data);
    });
}
