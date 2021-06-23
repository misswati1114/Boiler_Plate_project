class ball{
    constructor(x,y){
        var options ={
            restitution:0.3,
            friction:0.5,
            density:0.5
            
        }
        this.body = Bodies.circle(x,y,20,options);
        // this.width = width
        // this.height = height
        World.add(world,this.body)
      //load image
        
    }
    display(){
        var y = this.body.position.y;
        var x = this.body.position.x;
        //display image
    }
}