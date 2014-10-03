var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
gameDraw();

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}
    
function gameLoop() {
    
}

function gameDraw() {
   context.fillStyle =  "rgb(108, 245, 181)";
   context.fillRect(0, 0, screenWidth, screenHeight);
}