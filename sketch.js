var sea;
var seaImg;
var ship;
var shipImg;
function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png",'ship-4.png')
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  ship = createSprite(250,250,20,20);
  ship.addAnimation("movingship",shipImg);
  ship.scale = 0.1
  sea.x = sea.width/2
}
function draw() {
  background("blue");
  if(sea.x<0){
    sea.x = sea.width/2;
  }
  ship.y = World.mouseY
  drawSprites();
}
