class Dustbin{

    constructor(x,y,width,height){
    
    
    var options={
    
    isStatic=true,
    'restitution':0,
    'friction':8,
    'density':8
    }
    
    
    this.body=Bodies.rectangle(x,y,width,height,options)
    
    this.width=width
    this.height=height
    
    World.add(world,this.body)
    
    }
    display() {
    
    rectMode(CENTRE)
    
    fill ("green")
    
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
    
    
    }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    