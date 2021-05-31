var ant ;




function setup() {
  createCanvas(1000,500);
  ant = createSprite(30, 470, 50, 50);
}

function draw() {
  background(180);

  

// starting commands for the movement of ant (aka Micky)
if(keyDown("left_arrow")){
  ant.x = ant.x -5;
}

if(keyDown("right_arrow")){
  ant.x = ant.x + 5;
}

if(keyDown("up_arrow")){
  ant.y =ant.y -5;
}

if(keyDown("down_arrow")){
  ant.y = ant.y + 5;
}
//commands end 



  drawSprites();
}