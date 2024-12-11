const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();
let datafile = null;
let currentdata = null;
let data = [];

router.post("/", (req, res, next) =>{
    datafile = fs.readFileSync(__dirname + "/Data.json");
    let currentdata = JSON.parse(datafile);
    //old data push
    for(i = 0; i < currentdata.length; i++){
         data.push({
            item: currentdata[i].item,
            owner: currentdata[i].owner,
            exp: currentdata[i].exp,
            id: currentdata[i].id
         });
    }
    //new data push
    data.push({
        item: req.body.item,
        owner: req.body.owner,
        exp: req.body.exp,
        id: Math.floor(Math.random() * 100000)
     });
    // write data
    let stringjson = JSON.stringify(data, null, 2);
    fs.writeFileSync(__dirname + "/Data.json", stringjson);
    data = [];
    res.send("Done");
    res.status(200);
});
module.exports = router;