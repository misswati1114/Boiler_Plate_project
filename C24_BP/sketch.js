const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var side1,side2,side3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 668, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	paper = new ball(50,650)
	side1 = new Side(width-100,height-90,15,80);
	side2 = new Side(width-300,height-90,15,80);
	side3 = new Side(width-200,height-45,200,15);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //drawSprites();
  paper.display();
  side1.display();
  side2.display();
  side3.display();
 rect(ground.position.x,ground.position.y,width, 10)
}

function keyPressed() {
//apply force


}