const express = require('express');
const bodyParser = require('body-parser')
const routes = require("./routes");
const morgan = require("morgan");
const path = require('path');

console.log("Starting...");
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.use(express.static(path.join(__dirname, '/client/build')));
//app.use("/", (req, res, next)=>{
//  res.send("Hello");
//});

// application routes --------------------------------
app.get('*', function (req, res) {
  // load the front-end (react / angular / etc handles page changes)
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})