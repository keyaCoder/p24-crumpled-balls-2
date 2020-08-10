var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paper, dustbin;

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


	//Create a Ground
	ground = new Ground(width / 2,height - 20,800,40);

	// why can't i make the paper sit on ground??????????????
	dustbin = new Dustbin(600, 595, 100, 20);
	paper = new Paper(100, 300, 70);

	


	Engine.run(engine);
  
}


function draw() {
//  rectMode(CENTER);
  background(255);
  ground.display();
  dustbin.display();
  paper.display();
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body, paper.body.position, {x:50, y:-200})
	}
}

