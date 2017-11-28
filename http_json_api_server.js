const http = require('http');
const url = require('url');
const { URL, URLSearchParams } = require('url');

let server = http.createServer((req, res) => {
    let urlRequest = url.parse(req.url, true);
    let isoTime = urlRequest.query.iso;
    let newDate = new Date(isoTime);
    if (urlRequest.pathname === '/api/parsetime') {
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
        let seconds = newDate.getSeconds();
        let jsonTime = {
            "hour": hours,
            "minute": minutes,
            "second": seconds
        };
        res.writeHead(200, {'Content-Type': 'application/json' });
        res.write(JSON.stringify(jsonTime));
        res.end();
    } else if (urlRequest.pathname ==='/api/unixtime') {
        res.writeHead(200, {'Content-Type': 'application/json' });
        res.write(JSON.stringify({"unixtime": newDate.getTime()}));
        res.end();
    }
});

server.listen(process.argv[2]);