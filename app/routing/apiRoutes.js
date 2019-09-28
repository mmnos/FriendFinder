let friends = require("../data/friends");
let getMatch = require("../../logic");

module.exports = function(app) {

  app.get("/api/survey", function(req, res) {

    res.json(friends);

  });

  app.post("/api/survey", (req, res) => {

    let currentUser = req.body;

    let closestMatch = "charles";
    let closestMatchDiff = 41;
  
    friends.forEach(friend => {
      
      let totalDiff = 0;
  
      currentUser.scores.forEach((userScore, index) => {
  
        totalDiff += Math.abs(userScore - friend.scores[index]);
  
      });
      
      if (closestMatchDiff > totalDiff) {
        closestMatchDiff = totalDiff;
        closestMatch = friend;
      }
  
    });
  
    let matchDiff = closestMatchDiff / 40 * 100;
    let matchPercent = 100 - matchDiff;
  
    console.log(closestMatch);
    console.log(matchPercent);
  
    let profilePic = closestMatch.photo;
    console.log(profilePic); 

    friends.push(req.body);
    res.json({
      ...closestMatch, matchPercent : matchPercent
    });

  });

};