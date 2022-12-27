var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var audio;
function nextSequence(){

    var  randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    // Pushed to gamePattern array
    gamePattern.push(randomChosenColour);

    // Added animation for the chosen button
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
 
    // Used playSound function to play the audio
    playSound(randomChosenColour);

    // returned the chosen colour
    return randomChosenColour;
}

function playSound(name){
    audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})