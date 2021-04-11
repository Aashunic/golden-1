var monkey ;
var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var allScore = score + secondScore;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var pizza
var ground_img;
// create the variables for the score and displaying scores. and intialize with zero
var score = 0;
var secondScore = 0;
function preload(){
  back_img = loadImage("images 2/forest.jpg");
  ground_img = loadImage("images 2/lawn.jpg");
  player_img = loadImage("images 2/monkey.png");
  player2_img = loadImage("images 2/girrafe.png");
  fruit1_img = loadImage("images 2/apple.png");
  fruit2_img = loadImage("images 2/bannana.png");
  fruit3_img = loadImage("images 2/orange.png");
  fruit4_img = loadImage("images 2/pizza.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  //background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


 var ground=createSprite(200,200,50,50);
 ground.addImage(ground_img);
}