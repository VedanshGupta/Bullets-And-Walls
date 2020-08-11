var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(100, 200, 30, 10);
  bullet.shapeColor = color("red");

  speed = random(223, 331);
  weight = random(30, 52);
  thickness= random(22,83);
}

function draw() {
  background(255,255,255);

  bullet.velocityX = speed;
  
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10) {
      wall.shapeColor = color("blue");
    }

    if(damage<10) {
      wall.shapeColor = color("green");
    }
  }

  drawSprites();
}

function hasCollided(bullet1, wall1) {
  var x = wall1.x;
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = 1200;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}
