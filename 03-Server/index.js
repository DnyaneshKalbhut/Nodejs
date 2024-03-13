const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url} New req recieved \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HOMEPAGE");
        break;
      case "/about":
        res.end("Hello it s me DK");
        break;
      default:
        res.end("404 not ffound");
        break;
    }
  });
});

myServer.listen(4000, () => {
  console.log("server is started");
});
