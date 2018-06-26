// Andy St. Jean

// physics particle movement

var velx = 5;

function Particle(x, y, r)
{
  this.pos = createVector(x, y);
  this.vel = createVector(velx, 0);
  this.acc = createVector(0, 0);
  this.rad = r;

  this.gravity = createVector(0, 0.2);
  this.friction = createVector(-0.005, 0);
  this.mass = 0.5;

  this.trail = [];

  this.applyForce = function(force)
  {
    this.acc.add(force);
  }

  this.update = function()
  {
    this.acc.add(this.gravity);
    this.acc.add(this.friction);
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    if(this.pos.y > height - this.rad) {
      this.vel.y = -0.8 * this.vel.y;
    }

    if(this.pos.y > height - this.rad) {
      this.pos.y = height - this.rad;
    }

    if(this.pos.x > width){
      this.pos.x = 0;
    }

    if(this.vel.x < 0) {
      this.vel.x = 0;
    }

    
  }

  this.show = function()
  {
    ellipse(this.pos.x, this.pos.y, this.rad * 2, this.rad * 2);
  }
}
