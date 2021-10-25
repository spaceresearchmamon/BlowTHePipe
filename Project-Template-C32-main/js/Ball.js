class Ball {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.9,
      density:0.001

    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);
    this.image=loadImage("assets/melon.png");
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0, 0, this.w, this.h);
    imageMode(CENTER);
    image(this.image,0,0,150,150);
    pop();
  }
}
