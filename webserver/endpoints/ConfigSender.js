const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();
let datafile = null;
let currentdata = null;
let data = [];

router.get("/", (req, res, next) =>{
    const date = new Date();
    datafile = fs.readFileSync(__dirname + "/Config.json");
    let currentdata = JSON.parse(datafile);
    //get data
        data = currentdata;
    res.send(data);
    res.status(200);
    data = [];
});
module.exports = router;