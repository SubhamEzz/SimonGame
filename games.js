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
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(a){
   if(gamePattern[a] === userClickedPattern[a]){
     console.log("corect");
     if (userClickedPattern.length === gamePattern.length){
       setTimeout(function () {
         nextSequence();
       }, 1000);
     }
   }
  else{
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    reset();
  }
}

function nextSequence(){
  userClickedPattern=[];
  level++;

 $("#level-title").text("Level "  +level);

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

function reset(){
  gamePattern =[];
  started=false;
  level=0;

  $("#level-title").text("Press A Key to Start");

}
