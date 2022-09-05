var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0
		//density doesnt work

	}
	
	ball = Bodies.circle(400,350,20,ball_options)
	World.add(world,ball)

	groundObj= new Ground(750,670,1500,20)
	leftSide= new Ground(1100,600,20,120)
    rightSide= new Ground(1300,600,20,120)


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.show()
  leftSide.show()
  rightSide.show()
  Engine.update(engine);
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.06,y:-0.07})
	}
}



