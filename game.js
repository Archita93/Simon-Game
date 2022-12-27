var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var audio;
function nextSequence(){

    var  randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    // gamePattern.push(randomChosenColour);
    // var song = randomChosenColour + ".mp3"
    // console.log(song);
    audio = new Audio("sounds/"+randomChosenColour+".mp3");
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    audio.play();
    return randomChosenColour;
}

