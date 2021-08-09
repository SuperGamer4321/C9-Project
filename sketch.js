
var box;

function setup() {
  createCanvas(400,400);
box = createSprite(200,200,20,20);

}
function draw() 
{
if(keyIsDown(RIGHT_ARROW)){
  background("red");
} 
if(keyIsDown(LEFT_ARROW)){
  background("green");
} 
if(keyIsDown(UP_ARROW)){
  background("blue");
} 
if(keyIsDown(DOWN_ARROW)){
  background("black");
} 
drawSprites()

}




