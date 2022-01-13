const express = require("express");
const app = express();
const cors = require("cors");

var path = require("path");
var fs = require("fs");

app.use(cors());

//gets lesson.json from file folder
app.get("/lesson", function (req, res, next) {
  var filePath = path.join(__dirname, "files", "lessons.json");

  fs.stat(filePath, function (err, fileInfo) {
    if (err) {
      next();
      return;
    }
    if (fileInfo.isFile()) res.sendFile(filePath);
    else next();
  });
});

//gets users.txt from file folder
app.get("/user", function (req, res, next) {
  var filePath = path.join(__dirname, "files", "users.txt");

  fs.stat(filePath, function (err, fileInfo) {
    if (err) {
      next();
      return;
    }
    if (fileInfo.isFile()) res.sendFile(filePath);
    else next();
  });
});

//gets index.html from file folder
app.use(function (req, res, next) {
  var filePath = path.join(__dirname, "files", req.url);

  fs.stat(filePath, function (err, fileInfo) {
    if (err) {
      next();
      return;
    }
    if (fileInfo.isFile()) res.sendFile(filePath);
    else next();
  });
});

//starts server and sends message to console
app.listen(3000, function () {
  console.log("express server started.");
});