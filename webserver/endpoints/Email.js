var nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const fs = require('fs');
const exp = require('constants');
let datafile = fs.readFileSync(__dirname + "/Config.json");
let currentdata = JSON.parse(datafile);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: currentdata[1].senderUsername,
    pass: currentdata[1].senderPassword
  }
});

schedule.scheduleJob('0 0 * * *', () => { 
  datafile = fs.readFileSync(__dirname + "/Config.json");
  currentdata = JSON.parse(datafile);
  if(currentdata[1].sendEmails == true){
    var date = new Date();
    let foodDataFile = fs.readFileSync(__dirname + "/Data.json");
    let foodData = JSON.parse(foodDataFile);
    var expFood = [];
    let message = "The itemes below are expired:\n"
    for(i = 0; i < foodData.length; i++){
        var d1 = new Date(foodData[i].exp);
        if(d1 < date){
            expFood.push({
                item: foodData[i].item,
                owner: foodData[i].owner,
                daysExp: Math.round((d1- date) / (1000 * 60 * 60 * 24))
            });
            message = message + "<li><b>" + foodData[i].item + "</b> that is owned by " + foodData[i].owner + " is expired by " + Math.abs(Math.round((d1- date) / (1000 * 60 * 60 * 24))) + " days!!\n </li>";
        }
    }
    
    if(expFood != []){
      for(i = 0; currentdata[1].emails.length > i;i++){
          var mailOptions = {
              from: currentdata[1].senderUsername,
              to: currentdata[1].emails[i],
              subject: 'YOUR FRIDGE HAS EXPIRED FOOD!!!',
              html: message
          };
          transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
      }
    }
  }
});
