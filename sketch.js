var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(600,200,50,100);
movingRect = createSprite(600,800,100,50);

fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";
fixedRect.velocityY=5
movingRect.velocityY=-5
}

function draw() {
  background(0); 
  if(movingRect.width/2 + fixedRect.width/2 > movingRect.x - fixedRect.x &&
    movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x ){
    fixedRect.velocityX=fixedRect.velocityX*(-1)
    movingRect.velocityX=movingRect.velocityX*(-1)
    }

    if(movingRect.height/2 + fixedRect.height/2 > movingRect.y - fixedRect.y &&
    movingRect.height/2 + fixedRect.height/2 > fixedRect.y - movingRect.y){
      fixedRect.velocityY=fixedRect.velocityY*(-1)
      movingRect.velocityY=movingRect.velocityY*(-1)
  }
 drawSprites();
}