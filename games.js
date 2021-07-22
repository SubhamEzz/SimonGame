var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];

var userClickedPattern = [];
var started = false;
var level=0;
$(document).keydown(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
  }
});

$(".btn").on("click",function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);

});
function nextSequence(){
  level++;

 $("#level-title").text("Level "+level);

  var rnd =Math.floor( Math.random()*4);
  var rndChosenColor = buttonColors[rnd];
  gamePattern.push(rndChosenColor);

  $("#"+rndChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(rndChosenColor);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
            audio.play();

}

function animatePress(currentColor){

  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass("pressed");
  }, 100);

}
