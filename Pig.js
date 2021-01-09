class Pig {
    constructor(x,y){
      
      var properties = {
        density:1,
        friction:1,
        restitution:0.8
      }
      this.pig = Bodies.rectangle(x,y,50,50,properties);
      World.add(world,this.pig)
  
     // this.width = width;
     // this.height = height;
    }
    display(){
  
      push()
      rectMode(CENTER)
      translate(this.pig.position.x,this.pig.position.y);
      rotate(this.pig.angle)
      fill("green")
      rect(0,0,50,50);
      pop();
    }
  }