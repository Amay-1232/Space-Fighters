var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image,obstacle3Image;
var alien1Image, alien2Image,alien3Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles , blast, BlastImage   ;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.jpg");
  blastImage = loadImage("./assets/blast.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  //fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  obstacle3Image = loadImage("./assets/obstacle3.png");
  alien1Image = loadImage("./assets/alien1.png");
  alien2Image = loadImage("./assets/alien2.png");
  alien3Image= loadImage("./assets/alien3.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth , windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  aliens();
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
  
}
function aliens () {
 if(frameCount%60 === 0){
   var alien1 = createSprite(600,165,10,40);
   var rand = Math.round(random(1,3))
   switch(rand){
      case 1:alien1.addImage(alien1Image)
     break;
     case 2:alien1.addImage(alien2Image)
     break;
     case 3:alien1.addImage(alien3Image)
     break;
     default:break;
   }
}
  }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}