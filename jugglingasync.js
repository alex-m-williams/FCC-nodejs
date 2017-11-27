let http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];
let dataResponses = "";
http.get(url1, response => {
    response.setEncoding("utf8");
   response.on("data", data => {
        dataResponses = dataResponses.concat(data);
   });
   response.on("end", () => {
        console.log(dataResponses);
        dataResponses = "";
        http.get(url2, response => {
    response.setEncoding("utf8");
   response.on("data", data => {
        dataResponses = dataResponses.concat(data);
   });
   response.on("end", () => {
        console.log(dataResponses);
        dataResponses = "";
        http.get(url3, response => {
    response.setEncoding("utf8");
   response.on("data", data => {
        dataResponses = dataResponses.concat(data);
   });
   response.on("end", () => {
        console.log(dataResponses);
        dataResponses = "";
   })
});
   })
});
   })
});