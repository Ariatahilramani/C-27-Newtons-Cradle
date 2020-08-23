class Bob {
    constructor(x, y, radius) {
        var ball_options ={
            isStatic:true,
            restitution:0.3,
            friction:0.1,
            density:0.1,
         }
      
      this.ball = Bodies.circle(x, y, radius, ball_options);
      this.radius=radius;
      World.add(world, this.ball);
      
    }
    display(){
     fill("pink")
      ellipseMode(RADIUS);
      
      ellipse(this.ball.position.x,this.ball.position.y,this.radius,this.radius);
      
    }
    
}
