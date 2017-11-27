const http = require('http');
const map = require('through2-map');
const fs = require('fs');

let server = http.createServer((request, response) => {
    request.pipe(map(chunk => {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(process.argv[2]);