const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();
let datafile = null;
let currentdata = null;
let data = [];

router.get("/", (req, res, next) =>{
    datafile = fs.readFileSync(__dirname + "/Config.json");
    let currentdata = JSON.parse(datafile);
    //get data
    data = currentdata[0];
    res.send(data);
    res.status(200);
    data = [];
});
router.get("/full", (req, res, next) =>{
    datafile = fs.readFileSync(__dirname + "/Config.json");
    let currentdata = JSON.parse(datafile);
    //get data
    data = currentdata;
    res.send(data);
    res.status(200);
    data = [];
});
module.exports = router;