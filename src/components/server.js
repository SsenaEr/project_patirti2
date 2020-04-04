var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var port = 5500;
app.use(bodyParser.json());

var jrRouter = express.Router();
var jrCors = require("cors");

app.use(jrCors());
app.use(bodyParser.urlencoded({ extended: false }))



/////////////////////////////////////////////////////////////////////////////////////
//////////////                     SERVER DİNLEME                  //////////////////
/////////////////////////////////////////////////////////////////////////////////////
app.use("/", jrRouter);
app.listen(port, function() {
    console.log("Server Burada");
})