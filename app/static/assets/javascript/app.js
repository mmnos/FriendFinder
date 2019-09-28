document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

$("#submit").on("click", () => {
  
  event.preventDefault();

  let scoreArr = [];

  scoreArr.push(
    $('input[name="question1"]:checked').val(), 
    $('input[name="question2"]:checked').val(), 
    $('input[name="question3"]:checked').val(),
    $('input[name="question4"]:checked').val(), 
    $('input[name="question5"]:checked').val(), 
    $('input[name="question6"]:checked').val(), 
    $('input[name="question7"]:checked').val(), 
    $('input[name="question8"]:checked').val(), 
    $('input[name="question9"]:checked').val(), 
    $('input[name="question10"]:checked').val()
  );

  let currentUser = {
    name : $("#userName").val().trim(),
    photo : $("#userImg").val().trim(),
    scores : scoreArr
  };

  console.log(currentUser);

  // let getMatch = (friends, scoreArr) => {

  // let closestMatch = "charles";
  // let closestMatchDiff = 41;

  // friends.forEach(friend => {
    
  //   let totalDiff = 0;

  //   currentUser.scores.forEach((userScore, index) => {

  //     totalDiff += Math.abs(userScore - friend.scores[index]);

  //   });
    
  //   if (closestMatchDiff > totalDiff) {
  //     closestMatchDiff = totalDiff;
  //     closestMatch = friend;
  //   }

  // });

  // let matchDiff = closestMatchDiff / 40 * 100;
  // let matchPercent = 100 - matchDiff;

  // return closestMatch;

  // };

  // $.get("/api/survey", function(data) {

  // let closestMatch = "charles";
  // let closestMatchDiff = 41;

  // data.forEach(friend => {
    
  //   let totalDiff = 0;

  //   currentUser.scores.forEach((userScore, index) => {

  //     totalDiff += Math.abs(userScore - friend.scores[index]);

  //   });
    
  //   if (closestMatchDiff > totalDiff) {
  //     closestMatchDiff = totalDiff;
  //     closestMatch = friend;
  //   }

  // });

  // let matchDiff = closestMatchDiff / 40 * 100;
  // let matchPercent = 100 - matchDiff;

  // console.log(closestMatch);
  // console.log(matchPercent);

  // let profilePic = closestMatch.photo;
  // console.log(profilePic); 

  // console.log(data)

  // $("#matchModal").text(`WOW! You've matched with ${closestMatch}!`);
  // $("#matchPercModal").text(`You're a ${matchPercent}% match!`);
  // $(".modal-content").append(`<img src=${profilePic}/>`);

  // return closestMatch;

  
// });


  $.post("/api/survey", currentUser, function(data) {

    if (data) {
      console.log(data);
    }

    $("#matchModal").text(`WOW ${data.matchPercent}%! You and ${data.name} are a great match!`);
    // $("#matchPercModal").text(`You're a ${data.matchPercent}% match!`);
    $(".modalImg").attr("src", data.photo);

  });

  // $(".clearBtn").prop("checked", false);

});