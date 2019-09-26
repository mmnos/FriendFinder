const friends = require("./app/data/friends");

let user = {
  "name":"Robert",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5
  ]
};

let getMatch = (friends, user) => {

let closestMatch = "charles";
let closestMatchDiff = 41;

friends.forEach(friend => {
  
  let totalDiff = 0;

  user.scores.forEach((userScore, index) => {

    totalDiff += Math.abs(userScore - friend.scores[index]);

  });
  
  if (closestMatchDiff > totalDiff) {
    closestMatchDiff = totalDiff;
    closestMatch = friend;
  }
  
});

let matchDiff = closestMatchDiff / 40 * 100;
let matchPercent = 100 - matchDiff;

console.log(matchPercent);

console.log(closestMatch);

return closestMatch;

};

module.exports = getMatch;