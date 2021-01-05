class Mango {
    constructor(x, y,radius) {
      var options = {
          isStatic : true,
           
      }
      this.x = x;
      this.y = y;
      this.radius = radius
      this.image = loadImage("mango.png")
      this.body = Bodies.circle(this.x, this.y,  this.radius ,options);
           World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      //fill("yellow");
     image(this.image,pos.x, pos.y, this.radius*2 ,  this.radius*2 ,0);
    }
  }
  