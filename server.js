var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up html routes

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"./public/home.html"));
});

app.get("/public/survey.html", function(req,res) {
    res.sendFile(path.join(__dirname,"./public/survey.html"));
});

// route for friends JSON

app.get("/api/friends", function(req,res) {
    res.sendFile(path.join(__dirname, "./app/data/friends.js"));
});

// post route for friends array

app.post("/api/friends", function(req, res) {
    var newFriend = req.body.score;  
    console.log(newFriend);  
    friends.push(newFriend);
    res.json(newFriend);
  });

// set up server listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

