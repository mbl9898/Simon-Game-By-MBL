var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var start = false;
var count = 0;

$(document).keypress(function() {
  if(start == false){
    start = true;
    nextSequence();
  }
});

function nextSequence() {
  if (start == true) {
    var randomNumber = (Math.floor(Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("h1").html("Level " + level);

    $('#' + randomChosenColour).fadeOut(300).fadeIn(300).ready(function() {
      playSound(randomChosenColour);
    });
  }
}
$("[type='button']").click(function(event) {
  if (start == true) {
    count++;
    var userChosenColour = (event.delegateTarget.id);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    if(userClickedPattern.length<=gamePattern.length){
      checkAnswer(count-1);
    }

  }
});

function checkAnswer(current_level){
  if(userClickedPattern[current_level]===gamePattern[current_level]){
    if(userClickedPattern.length === gamePattern.length){
      nextSequence();
      userClickedPattern= [];
      count = 0;
    }
   }
    else{
       $("h1").html("Game Over, Press Any Key To Restart");
       start = false;
       gameOver();
 }
}

function playSound(name) {
  var audio = new Audio('sounds/' + (name) + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  setTimeout(function() {
    $('#' + currentColour).addClass("pressed");
  }, 0);
  setTimeout(function() {
    $('#' + currentColour).removeClass("pressed");
  }, 50);
}

function gameOver() {
  setTimeout(function() {
    $("body").addClass("game-over");
  }, 0);
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 300);
  playSound("wrong")
  level = 0;
}
// working code till  12



// var userClickedPattern = [];
// var gamePattern = [];
// var buttonColours = ["red", "blue", "green", "yellow"];
//
//
//
// function nextSequence() {
//   var randomNumber = (Math.floor(Math.random()* 4) );
//   var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
//   console.log(gamePattern);
//   console.log('#' + randomChosenColour);
//
//   $('#' + randomChosenColour).fadeOut(50).fadeIn(50).ready(function(){
//     playSound(randomChosenColour);
//   });
// }
//
// $("[type='button']").click(function(event){
// var userChosenColour = (event.delegateTarget.id);
//   userClickedPattern.push(userChosenColour);
//   console.log(userClickedPattern);
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//
//
// });
//
// function playSound(name){
//   var audio = new Audio('sounds/'+ (name) +'.mp3');
//     audio.play();
// }
//
// function animatePress(currentColour){
//   setTimeout(function(){
//     $('#' + currentColour).addClass("pressed");
//   }, 0);
//   setTimeout(function(){
//     $('#' + currentColour).removeClass("pressed");
//   }, 60);
// }
