// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// express config
// creating an "express" server
var app = express();
// Sets an initial port.
var PORT = process.env.PORT || 8080;
// Sets up app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
// require external routing files for html/api routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// listener
// starts the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});