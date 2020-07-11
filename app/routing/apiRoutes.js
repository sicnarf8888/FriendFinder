// load friends data
var friendsData = require("../data/friends.js");

// adder function
function getSum(total, num) {
  return total + num;
}

// subtraction function with absolute value returns
function getDif(num1, num2) {
  return Math.abs(num1 - num2);
}

// routing
module.exports = function(app) {
  // API GET request
  // when user visits api/friends, display json format of all data from friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST request
  app.post("/api/friends", function(req, res) {
    // initializing friend scores array
    // each score in this array will match their index from the friends data array
    var friendsScores = [];
    // build array by looping through friendsData and summing scores using the
    // reduce method with the get sum function on the scores array
    for (var i = 0; i < friendsData.length; i++) {
      var answerSum = 0;
      answerSum = friendsData[i].scores.reduce(getSum);
      friendsScores.push(answerSum);
    }

    // initializing userScore var
    var userScore = 0;
    // converting scores in req body to integers and adding up user 
    // score/saving sum to userScore var
    for (var j = 0; j < req.body.scores.length; j++) {
      req.body.scores[j] = parseInt(req.body.scores[j]);
      userScore += req.body.scores[j];
    }
    
    // initializing abs value array
    var absValue = [];
    // getting abs value of user scores vs friends scores and building array with
    // the values
    // all indexes for this array will be equal to that of friends data
    for (var k = 0; k < friendsScores.length; k++) {
      var av = 0;
      av = getDif(userScore, friendsScores[k]);
      absValue.push(av);
    }
    // grab the lowest value from the absValues array - that'll be the best friend
    var avMin = Math.min.apply(Math, absValue);
    // grab the index of first instance avMin occurs in absValue array
    var avMinFirstIndex = absValue.indexOf(avMin);

    console.log("user score: " + userScore);
    console.log("friends scores: " + friendsScores);
    console.log("abs values: " + absValue);
    console.log("min abs value: " + avMin);
    console.log("index of av: " + avMinFirstIndex);

    // create best friend array which is an array of the object at 
    // friendsData[avMinFirstIndex]
    var bestFriend = friendsData[avMinFirstIndex];

    // return in json the best friend array for the modal to pull from
    res.json(bestFriend);

    // pushing req.body to friendsData array for api display
    // doing this after comparison so that user doesn't match with themselves
    friendsData.push(req.body);
  });
};