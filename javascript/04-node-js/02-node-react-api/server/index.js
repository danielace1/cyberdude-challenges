const http = require("http");

const internsData = require("./data/intern.json");

const PORT = 3000;

http
  .createServer(function (req, res) {
    console.log("server is running", PORT);
    res.write(JSON.stringify(internsData));
    res.end();
  })
  .listen(PORT);
