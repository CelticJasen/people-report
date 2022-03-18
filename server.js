const express = require('express');
const fs = require('fs');
const port = 80;
const app = express();
const find = require('local-devices');

var davidHere = "";
var deadHere = "";
var jasenHere = "";
var brianHere = "";
var darwinHere = "";
var allStatus = "";

const davidMac = 'd6:27:87:45:10:8d';
const jasenMac ='8c:f5:a3:99:a5:30';
const deadMac ='fc:c2:de:27:e2:2e';
const brianMac = 'ae:50:2f:40:c0:e4';
const darwinMac = 'b8:d7:af:a5:ac:22';

// Find all devices within 7.7.7.2 to 7.7.7.200 range
setInterval(function(){
    find('7.7.7.20-7.7.7.30').then((devices) => {
        devices;
        console.log(devices);
        allStatus = " We're currently out of the office.";
        for (i = 0; i < devices.length; i++) {
            if (devices[i].mac === davidMac) {
                console.log("David is here");
                davidHere = "Computer Dave is here";
            } else if (devices[i].mac === jasenMac) {
                console.log("Jasen is here");
                jasenHere = "Jasen is here";
            } else if (devices[i].mac === brianMac) {
                console.log("Brian is here");
                brianHere = "Brian is here";
            } else if (devices[i].mac === darwinMac) {
                console.log("Darwin is here");
                darwinHere = "Darwin is here";
            }else if (devices[i].mac === deadMac) {
                console.log("dead is here");
                deadHere = "";
            }
        }

        allStatus = jasenHere !== "" ? "Come on in!"
            : brianHere !== "" ? "Come on in!"
                : darwinHere !== "" ? "Come on in!"
                    : deadHere !== "" ? "The door may be locked - call for service."
                        : davidHere !== "" ? "You may need to knock on the side door."
                            : " We're currently out of the office.";

        if (davidHere === "") {
            console.log("David is out");
           // davidHere = "Computer Dave is out";
        }

        if (deadHere === "") {
            console.log("dead is out");
            //deadHere = "dead is out";
        }

        if (jasenHere === "") {
            console.log("Jasen is out");
            //jasenHere = "Jasen is out";
        }

        if (brianHere === "") {
            console.log("Brian is out");
            //brianHere = "Brian is out";
        }

        if (darwinHere === "") {
            console.log("Darwin is out");
            //darwinHere = "Darwin is out";
        }

        fs.writeFile("./dist/david.txt", davidHere, function (err) {
            if (err) return console.log(err);
        });
        fs.writeFile("./dist/dead.txt", deadHere, function (err) {
            if (err) return console.log(err);
        });
        fs.writeFile("./dist/jasen.txt", jasenHere, function (err) {
            if (err) return console.log(err);
        });
        fs.writeFile("./dist/brian.txt", brianHere, function (err) {
            if (err) return console.log(err);
        });
        fs.writeFile("./dist/darwin.txt", darwinHere, function (err) {
            if (err) return console.log(err);
        });
//allStatus ="WPCO:: 4672 | No Public Access Permitted.";
        fs.writeFile("./dist/allStatus.txt", allStatus, function (err) {
            if (err) return console.log(err);
        });
        davidHere = "";
        deadHere = "";
        jasenHere = "";
        brianHere = "";
        darwinHere = "";
    },
    (devices) => {
        console.log("FAILURE!!!" + devices);
    });
  }, 30 * 1000);

app.listen(port,'127.0.0.1', function(){
    console.log("Server is running on "+ port +" port");
});

app.use(express.static('dist'));
