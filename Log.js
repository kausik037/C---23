class Log{

    constructor(x,y,width,angle){
      
      var properties = {
        density:1,
        friction:1,
        restitution:0.8
      }
      this.log = Bodies.rectangle(x,y,20,width,properties);
      Matter.Body.setAngle(this.log, angle);

      World.add(world,this.log)
      
      this.width = width;
     // this.height = height;
    }
    display(){
  
      push()
      rectMode(CENTER)
      translate(this.log.position.x,this.log.position.y);
      rotate(this.log.angle)
      fill("yellow")
      rect(0,0,20,this.width);
      pop();
    }
  }