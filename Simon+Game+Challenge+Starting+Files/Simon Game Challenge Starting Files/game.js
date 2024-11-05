//
let buttonColours  = ['red','blue','yellow','green'] 
var gamePattern = [];
var userClickedPattern = [];
var userChosenColour;
var level = 0;
var started = false;
$(document).keypress(()=>{
    if(!started) {
        $("#level-title").text("Level: "+ level);
        nextSequence();
        started = true;
    }
});
function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3")
    audio.play();
}
function animatePress(colour){
    $("#"+colour).addClass("pressed");
    setTimeout(()=>{
        $("#"+colour).removeClass("pressed");
    },"100") 
}
var index=0;
$(".btn").click(function () {
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour)
    animatePress(userChosenColour);
    checkanswers(userClickedPattern.length-1);
})
function checkanswers(i){
        if(gamePattern[i]==userClickedPattern[i]){
            console.log("Succes");
            if(gamePattern.length == userClickedPattern.length){
                userClickedPattern=[];
                setTimeout(function () {
                    nextSequence();
                  }, 1000);}
            
        }
        else{
            console.log("failure");
            level=0;
            userClickedPattern=[];
            gamePattern = [];
            $("#level-title").text("Press A key to restart ");
        }
}
function nextSequence(){
    $("#level-title").text("Level: "+ ++level);
    var randomNumber = Math.floor((Math.random()*4));
var randomChosenColour =  buttonColours [randomNumber];
gamePattern.push(randomChosenColour);
    playSound(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);   

}

