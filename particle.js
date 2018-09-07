// Andy St. Jean

// physics particle movement

var velx = 3;

function Particle(x, y, r)
{
  this.pos = createVector(x, y);
  this.vel = createVector(5, 0);
  this.acc = createVector(0, 0);

  this.rad = r;

  this.gravity = createVector(0, 0.2);
  this.friction = createVector(0.2, 0);

  this.applyForce = function(force)
  {
    this.acc.add(force);
  }



  //update location of ball
  this.update = function()
  {
    this.acc.add(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    //update for ball bounce y direction
    if(this.pos.y > height - this.rad) {
      this.vel.y = -0.8 * this.vel.y;
      this.vel.x = 0.9 * this.vel.x; //apply friction to ball


      if(this.pos.y > height - this.rad) {
	       this.pos.y = height - this.rad;
         this.vel.x = 0.9 * this.vel.x; //apply friciton to ball

      }
    }

    //ball will bounce off wall
    if(this.pos.x < this.rad + 0 || this.pos.x > width - this.rad) {
      this.vel.x *= -1;
      this.friction.mult(-1);
    }
  }

  //show the ball
  this.show = function()
  {
    //stroke(0, 255, 0);
    strokeWeight(5);

    //draw the circle
    ellipse(this.pos.x, this.pos.y, this.rad * 2, this.rad * 2);
  }
}
