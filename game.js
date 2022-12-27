var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var audio;

var started = false;

function nextSequence(){

    var  randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    // Pushed to gamePattern array
    gamePattern.push(randomChosenColour);

    // Added animation for the chosen button
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
 
    // Used playSound function to play the audio
    playSound(randomChosenColour);

    level++;    

    $("h1").text("Level "+level);

    started = true;
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
    if(checkAnswer(userClickedPattern[userClickedPattern.length-1])  === true){
        if(gamePattern.length == userClickedPattern.length){
            setTimeout(nextSequence,1000);
            userClickedPattern = [];
        }
    }
    else{
        audio = new Audio()
    }
})

$(document).keydown(function(){
    if(started != true){
        nextSequence();
    }
})

function checkAnswer(level){
    if(userClickedPattern[userClickedPattern.length-1] == gamePattern[gamePattern.length-1]){
        return true;
    }
    else{
        return false;
    }
}
