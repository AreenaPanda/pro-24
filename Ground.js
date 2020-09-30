class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
      //  this.groundThickness=20;
        
        this.body=Bodies.rectangle(x,y,w,h,options)

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos,y);
        fill(255)
		stroke(255)
        rect(0,0,this.x, this.y);
        pop()
        rectMode(CENTER)
    }
}