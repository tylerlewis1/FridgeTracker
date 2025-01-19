const { json } = require('express');
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post("/", (req, res, next) =>{
    // write new data
    let stringjson = JSON.stringify(req.body, null, 2);
    fs.writeFileSync(__dirname + "/Config.json", stringjson);
    res.send("Done");
    res.status(200);
});
module.exports = router;