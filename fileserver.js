// "YYY-MM-DD hh:mm"

const http = require('http');
const fs = require('fs');
let fileLoc = process.argv[3];

let server = http.createServer((request, response) => {
    let stream = fs.createReadStream(fileLoc);
    stream.pipe(response);
});

server.listen(process.argv[2]);