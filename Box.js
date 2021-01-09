class Box{

  constructor(x,y){
    
    var properties = {

      density:1,
      friction:1,
      restitution:0.8
    }
    this.box = Bodies.rectangle(x,y,70,70,properties);
    World.add(world,this.box)

   // this.width = width;
   // this.height = height;
  }
  display(){

    push()
    rectMode(CENTER)
    translate(this.box.position.x,this.box.position.y);
    rotate(this.box.angle)
    fill("red");
    rect(0,0,70,70);
    pop();
  }
}