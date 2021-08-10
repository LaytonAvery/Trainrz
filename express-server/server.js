const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/signup.html");
});
app.get("/about", function (req, res) {
	res.send("Learn all about our Trainrz");
});

app.listen(3001, function () {
	console.log("Server running on port 3001");
});
