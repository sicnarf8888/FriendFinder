// dependencies
// include the path package to get the correct file path for our html
var path = require("path");

// routing
module.exports = function(app) {
  // HTML GET Requests
  // survey page if visit survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};