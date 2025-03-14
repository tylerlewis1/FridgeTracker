const express = require('express');
const cors = require('cors');
const add = require(__dirname + '/endpoints/Add.js');
const get = require(__dirname + '/endpoints/Get.js');
const config = require(__dirname + '/endpoints/ConfigSender.js');
const remove = require(__dirname + '/endpoints/Remove.js');
const email = require(__dirname + '/endpoints/Email.js');
const edit = require(__dirname + '/endpoints/Edit.js');
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
app.get("/webconfig", (req, res, next) =>{
    res.sendFile(__dirname + '/website/config.htm');
    res.status(200);
});

//endpoints
app.use("/add", add);
app.use("/config", config)
app.use("/get", get);
app.use("/rm", remove);
app.use("/edit", edit)


module.exports = app;