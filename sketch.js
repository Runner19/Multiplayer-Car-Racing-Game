var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;

function preload(){
    trackI = loadImage("images/track.jpg");
    Car1I = loadImage("images/car1.png");
    Car2I = loadImage("images/car2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
} 
function draw(){
  if(playerCount === 2 && gameState == 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    drawSprites();
  }
}