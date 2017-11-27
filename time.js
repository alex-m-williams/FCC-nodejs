// "YYY-MM-DD hh:mm"

const net = require('net');


let server = net.createServer(listener);
server.listen(process.argv[2]);
function listener (socket) {
    let data;
    let date = new Date();
    let years = date.getFullYear();
    let month = date.getMonth();
    (month + 1 < 10) ? month = "0" + month + 1 : month += 1;
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    data = years + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";
    
    socket.write(data);
    socket.end();
}