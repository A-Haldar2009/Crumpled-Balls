class Ball{

    constructor(x,y,radius){
    
    
    var options={
    
    isStatic=false,
    'restitution':8,
    'friction':1,
    'density':2
    }
    
    
    this.body=Bodies.circle(x,y,radius,options)
    
    this.radius=radius
    
    World.add(world,this.body)
    
    }
    display() {
    
    ellipseMode(RADIUS)
    
    fill ("white")
    
    circle(this.body.position.x,this.body.position.y,this.radius)
    
    
    
    }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    