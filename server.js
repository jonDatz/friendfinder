// Dependencies
const express = require("express");
const path = require("path");
let htmlRoutes = require('./app/routing/htmlRoutes');
let apiRoutes = require('./app/routing/apiRoutes');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



htmlRoutes(app);
apiRoutes(app);


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
