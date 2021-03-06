class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            friction:1,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)

        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white")
        ellipseMode(RADIANS)
        ellipse(0,0,this.r*2,this.r*2);
        pop()
        
      }
    
}
