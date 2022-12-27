var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var audio;
function nextSequence(){

    var  randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    // Pushed to gamePattern array
    gamePattern.push(randomChosenColour);
    
    // Added an audio for chosen button
    audio = new Audio("sounds/"+randomChosenColour+".mp3");

    // Added animation for the chosen button
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    // Played the audio 
    audio.play();

    // returned the chosen colour
    return randomChosenColour;
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})