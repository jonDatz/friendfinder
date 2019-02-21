// Add requires
const path = require("path");


// always needs module.exports if you're pushing this .js to another
module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};
