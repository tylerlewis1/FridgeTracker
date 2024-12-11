const express = require('express');
const cors = require('cors');
const add = require(__dirname + '/endpoints/Add.js');
const get = require(__dirname + '/endpoints/Get.js');
const remove = require(__dirname + '/endpoints/Remove.js');
const app = express();
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res, next) =>{
    res.sendFile(__dirname + '/website/index.htm');
    res.status(200);
});
app.get("/display", (req, res, next) =>{
    res.sendFile(__dirname + '/website/display.htm');
    res.status(200);
});
app.use("/add", add);
app.use("/get", get);
app.use("/rm", remove);

//endpoints

module.exports = app;