
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the platform
	
	
	//create 5 bobs
	

	//create 5 ropes
	

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  //display platform
 

 //display bobs
 

 //display ropes
 
}

//code for keyPressed
function keyPressed(){
	
  }