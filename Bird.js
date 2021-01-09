class Bird {
   
    constructer(x,y){
        
        var props = {

            "density":1.5,
            "friction":1,
            "restitution":0.5

        }
        this.bird = Bodies.rectangle(x,y,50,50,props);
        World.add(world,this.bird);
    }

    display(){        
        // this.bird.position.x = mouseX;
        // this.bird.position.y = mouseY;

        var pos = this.bird.position
        pos.x = mouseX
        pos.Y = mouseY
        push();
        rectMode(CENTER);
        //translate(200,100);
        translate(pos.x,pos.y);
        rotate(this.bird.angle);
        fill("yellow");
        rect(0,0,30,30);
        pop();
    }
}