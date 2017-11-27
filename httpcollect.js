let http = require('http');

let url = process.argv[2];
let numResponses = 0;
let dataResponses = "";
http.get(url, response => {
    response.setEncoding("utf8");
   response.on("data", data => {
        dataResponses = dataResponses.concat(data);
   });
   response.on("end", () => {
        console.log(dataResponses.length);
        console.log(dataResponses);
   })
});