
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	Ball = new paper(200,350,20)
	basketD = new Basket(800,370,200,20)
	basketR = new Basket(700,330,20,100)
	basketL = new Basket(900,330,20,100)
	ground = new Ground(500,390,1000,10)
   Engine.run(engine);
}


function draw() {
  
  background(0);
  Ball.display()
  ground.display()
  basketD.display()
  basketR.display()
  basketL.display()

  keyPressed()
  
  drawSprites();
 
}
function keyPressed(){
if(keyWentDown("up")){
	  Matter.Body.applyForce(Ball.body,Ball.body.position,{x:12,y:-25})
  }	
}



