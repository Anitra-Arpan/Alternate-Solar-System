var sun , ball1 , ball2 , ball3 , ball4 ;

function setup(){
  createCanvas(1500,900);

  sun = createSprite(680,310,75,75);
  
  ball1 = createSprite(680,162.5,50,50);
  ball2 = createSprite(680,462,50,50);
  ball3 = createSprite(500,315,50,50);
  ball4 = createSprite(850,315,50,50);

  sun.shapeColor = "yellow";
  ball1.shapeColor = "red";
  ball2.shapeColor = "orange";
  ball3.shapeColor = "aqua";
  ball4.shapeColor = "pink";

  sun.setCollider("circle",0,0,50);
}

function draw() {
  background(0); 
  
  if(World.frameCount % 100 === 0 ){
    sun.width = sun.width + 25;
    sun.height = sun.height + 25;
  }

  if(collide(ball1,sun)){
    ball1.destroy();
  }

  if(collide(ball2,sun)){
    ball2.destroy();
  }

  if(collide(ball3,sun)){
    ball3.destroy();
  }

  if(collide(ball4,sun)){
    ball4.destroy();
  }

  if(sun.width > 1000){
    back.shapeColor = "yellow";
  }

 
  drawSprites();
}

function collide(object1,object2){ 
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){ 
    return true;
  }
  else { 
    return false;
  }
}