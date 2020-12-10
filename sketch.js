
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,700,800,20);
	side1=new Box(300,650,20,100);
	side2=new Box(500,650,20,100);
	side3=new Box(400,650,200,20);
	paper=new Paper(100,680,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  ground.display();

  //side1.display();
  //side2.display();
  side3.display();

  paper.display();

  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) 
	 { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 }
	 }
