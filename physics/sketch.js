
var pnt;
var pnts = [];

var gravity;
var boost;

var red = 255;
var green = 0;

function setup()
{
  createCanvas(500, 300);
  gravity = createVector(0, 0.2);
  boost = createVector(0, -0.8);
  stroke(255, 0, 0);
  fill(255, 255,  0);
}

function draw()
{
  background(115);
  
  for(var i = 0; i < pnts.length; i++)
  {
    pnts[i].update();
    pnts[i].show();
  }

  if(pnts.length > 50) {
    pnts.splice(0, 1);
  }
}

function mousePressed() {
  pnts.push(new Particle(0, mouseY, 5));
}
