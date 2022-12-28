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
    checkAnswer(userClickedPattern.length-1);        
})


$(document).keydown(function(){
    if(started != true){
        nextSequence();
    }
})


function checkAnswer(currentLevel){
    if(userClickedPattern.length===gamePattern.length){
        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
            if(equals(gamePattern,userClickedPattern)===true){
                setTimeout(function(){
                    nextSequence();
                    userClickedPattern = [];
        
                },1000);
            }
        }
        else{
            gameOver();
        }
       
    }
        
}

function equals(arr1,arr2){
    if(arr1.length===arr2.length){
        for(var i = 0; i < arr1.length; i++){
            if(arr1[i]!==arr2[i]){
                return false;
            }
        }
        return true;
    }
    gameOver();
    return false;
   
    
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    userClickedPattern = [];
}

function gameOver(){
    audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("gameOver");
    setTimeout(function(){
        $("body").removeClass("gameOver")
    },200);
    $("h1").text("Game over, Press Any Key to Restart");
    startOver();
}