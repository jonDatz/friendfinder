const path = require("path");
let friends = require("../data/friends");


module.exports = function (app) {
    // return friends json
    app.get("/api/friends", function (req, res) {
        console.log("get working");
        res.json(friends);
        
    });
  

    // app.post("/api/friends", function (req, res) {
    //     console.log("This post worked");
    // })
    


};