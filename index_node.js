// import "./index.css";
// import "./index.js";
import http from "http";
import url from "url";
import fs from "fs";
// const http = require("http");
// const url = require("url");
// const fs = require("fs");
let index = fs.readFileSync("index.html");
let css = fs.readFileSync("index.css");
let javaScript = fs.readFileSync("index.js");
const server = http.createServer((req, res) => {
  console.log("server started");
  switch (req.url) {
    case "/":
      res.end(index);
      break;
    case "/index.css":
        res.end(css);
        break;
    case "/index.js":
      res.end(javaScript);
      break;
  }
  console.log(req.url);
  let q = url.parse(req.url, true);
  let qdata = q.query;
  console.log(qdata);
});
server.listen(8080);
