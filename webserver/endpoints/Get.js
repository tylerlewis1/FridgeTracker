const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();
let datafile = null;
let currentdata = null;
let data = [];

router.get("/", (req, res, next) =>{
    const date = new Date();
    datafile = fs.readFileSync(__dirname + "/Data.json");
    let currentdata = JSON.parse(datafile);
    //get data
    for(i = 0; i < currentdata.length; i++){
        var d1 = new Date(currentdata[i].exp);
        var d2 = new Date();
        data.push({
            item: currentdata[i].item,
            owner: currentdata[i].owner,
            exp: currentdata[i].exp,
            id: currentdata[i].id,
            daystillexpire: Math.round((d1 - d2) / (1000 * 60 * 60 * 24))
         });
    }
    res.send(data);
    res.status(200);
    data = [];
});
module.exports = router;