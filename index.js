var gamePattern=[];
var buttonColors = ["red","green","blue","yellow"];
function nextSequence()
{
    var randomNumber =(Math.floor)(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    $("#"+ randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    play_Ound(randomChosenColor);
    choiceofYours((gamePattern.length));
}
var started = false;
var level = 1;
$(document).keypress(function(event)

{   if (!started)
    {
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
    }
 
});


var userClickedColor=[];
$(".btn").click(function()
{
    var userChosenColor=$(this).attr("id")
    userClickedColor.push(userChosenColor);
    console.log(userClickedColor);
    play_Ound(userChosenColor);
    animatePress(userChosenColor);
    choiceofYours((userClickedColor.length)-1);

});

function play_Ound(name)
{
    if (name == "blue")
{
    var blue1 = new Audio("blue.mp3");
    blue1.play();
}
    else if(name == "green")
{
    var green1 = new Audio("green.mp3");
    green1.play();   
}
    else if(name == "red")
    {
        var red1 = new Audio("red.mp3");
        red1.play();
    }
    else if(name == "yellow")
    {
        var yellow1 = new Audio("yellow.mp3");
        yellow1.play();
    }
    else
    {
        var wrong1 = new Audio("wrong.mp3");
        wrong1.play();
    }
}
function animatePress(animateButtons)
{
  $("#" +animateButtons).addClass("pressed");
    setTimeout(function()
    {
        $("#" + animateButtons).removeClass("pressed");
    },100);
   
}
function choiceofYours(currentLevel)

{
    if ((gamePattern[currentLevel]) == (userClickedColor[currentLevel]))
    {
        console.log("Success");
       
        if((gamePattern.length)=== (userClickedColor.length))
        {
            setTimeout(function()
            {
                level++;
                $("h1").text("Level "+level);
                nextSequence();
                userClickedColor=[];
                
            },1000);
        }

        }
else
{       if(gamePattern.length === userClickedColor.length)
    {
        console.log("Wrong");
        var wrong1 = new Audio("wrong.mp3");
        wrong1.play();
        $("body").addClass("game-over");
        setTimeout(function()
            {
                $("body").removeClass("game-over");
            },200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();

        }
           
}
}
function startOver()
{
    started = false;
    level = 1;
    gamePattern = [];
    
}
