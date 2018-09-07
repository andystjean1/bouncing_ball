//Andy St. Jean

var pnt;
var pnts = [];

var gravity;

function setup()
{
  createCanvas(700, 500);
  gravity = createVector(0, 0.2);
  boost = createVector(0, -0.8);
  stroke(0, 255, 0);
  fill(0, 255,  0);
}

function draw()
{
  background(115);

  for(var i = 0; i < pnts.length; i++)
  {
    pnts[i].update();
    pnts[i].show();
  }

 if(pnts.length > 10) {
    pnts.splice(0, 1);
  }
}

function mousePressed() {
  if(mouseX < width/2) {
    pnts.push(new Particle(20, mouseY, random(5, 19)));
  }

  else {
    pnts.push(new Particle( width - 20, mouseY, random(5, 19)));
  }
}
