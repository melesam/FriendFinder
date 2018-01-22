// require express, body-parser, and path.

var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
 
var app = express()

// // Sets an initial port.
var PORT = process.env.PORT || 8000;
 


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 



// Require route files for the server
require("./routing/apiroutes.js")(app);
require("./routing/htmlroutes.js")(app);


// Start the server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
