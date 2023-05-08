// import "./index.css";
// import "./index.js";
import http from "http";
import url from "url";
import fs from "fs";
// const http = require("http");
// const url = require("url");
// const fs = require("fs");
let loginHtml = fs.readFileSync("login.html");
let loginCss = fs.readFileSync("login.css");
let loginJavaScript = fs.readFileSync("login.js");
let signupHtml=fs.readFileSync("signup.html");
let signupCss=fs.readFileSync("signup.css");
const server = http.createServer((req, res) => {
  console.log("server started");
  switch (req.url) {
    case "/":
      res.end(loginHtml);
      break;
    case "/login.css":
        res.end(loginCss);
        break;
    case "/login.js":
      res.end(loginJavaScript);
      break;

    case "/signup.html":
      res.end(signupHtml);
      break;
    case "/signup.css":
      res.end(signupCss);
      break;
  }
  console.log(req.url);
  let q = url.parse(req.url, true);
  let qdata = q.query;
  console.log(qdata);
});
server.listen(8000);