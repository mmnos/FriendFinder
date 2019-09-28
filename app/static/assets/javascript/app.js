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

  if (scoreArr.indexOf(undefined) !== -1) {
    scoreArr = [];
    console.log("Please answer each question");
    return false;
  }

  let currentUser = {
    name : $("#userName").val().trim(),
    photo : $("#userImg").val().trim(),
    scores : scoreArr
  };

  console.log(currentUser);

  $.post("/api/survey", currentUser, function(data) {

    if (data) {
      console.log(data);
    }

    $("#matchModal").text(`WOW ${data.matchPercent}%! You and ${data.name} are a great match!`);
    $(".modalImg").attr("src", data.photo);

  });

});