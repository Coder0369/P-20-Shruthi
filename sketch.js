function preload(){
  bg= loadImage("images/iss.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  sleep= loadImage("images/sleep.png");
  bath = loadImage("images/bath1.png","images/bath2.png");
  brush= loadImage("images/brush.png");
  drink = loadImage("images/drink1.png","images/drink2.png");
  gym = loadImage("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadImage("images/move.png","images/move1.png");
}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300, 230, 50, 50);
  astronaut.addImage("sleep",sleep);
  astronaut.scale= 0.1;
}

function draw() {
  background(bg);  
  text("Instructions",20,35);
  text("Up Arrow = Brushing",20,35);
  text("Down Arrow= Gymming",20,35);
  text("Left Arrow = Eating",20,35);
  text("Right Arrow = Bathing ",20,35);
  text("m key = Moving ",20,35);

  edges = createEdgeSprite();
  astronaut.bounceOff(edges);

  if(keyDown("Up_Arrow")){
    astronaut.addImage("brushing",brush);
    astronaut.changeImage("brushing");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("Down_Arrow")){
    astronaut.addImage("Gymming",gym);
    astronaut.changeImage("Gymming");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("Left_Arrow")){
    astronaut.addImage("Eating",eat);
    astronaut.changeImage("Eating");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("Right_Arrow")){
    astronaut.addImage("bathing",bathing);
    astronaut.changeImage("bathing");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m_key")){
    astronaut.addImage("moving",move);
    astronaut.changeImage("move");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  drawSprites();
}