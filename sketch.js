const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot,tree, ground, boy, stone, mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var treeIMG, groundIMG, boyIMG; 	

function preload()
{
	treeIMG = loadImage("tree.png");
//	groundIMG = loadImage("ground.png");
boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 500);
	
//ground= createSprite(500,250,1000,200);
//ground.addImage(groundIMG)
//g/round.scale = 0.5

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.


boy= createSprite(300,400,100,100);
boy.addImage(boyIMG)
boy.scale = 0.1

tree= createSprite(800,275,100,100);
tree.addImage(treeIMG)
tree.debug = true;
tree.setCollider("rectangle",0,0 ,5,5);
tree.scale = 0.3
//console.log(mango.depth);

ground = new Ground(500,450,999,100);
stone = new Stone(250,345,50,40);
slingshot = new Slingshot(stone.body,{x:250,y:345});

mango1 = new Mango(900,230,20)
mango2 = new Mango(700,230,20)
mango3 = new Mango(940,240,20)
mango4 = new Mango(850,250,20)
mango5 = new Mango(750,200,20)
mango6 = new Mango(800,200,20)
mango7 = new Mango(700,100,20)
mango8 = new Mango(750,200,20)
mango9 = new Mango(800,200,20)
mango10 = new Mango(850,200,20)
mango11 = new Mango(900,200,20)
mango12 = new Mango(830,130,20)
Engine.run(engine);
  
}


function draw() {
  background("blue");
  ground.display();

  drawSprites();

	stone.display();
	mango1.display(); 
	mango2.display(); 
	mango3.display(); 
	mango4.display(); 
	mango5.display(); 
	mango6.display(); 
	mango7.display(); 
	mango8.display(); 
	mango9.display(); 
	mango10.display(); 
	mango11.display(); 
	mango12.display();
	//console.log(mango1.depth);
	slingshot.display();

		detectCollision(stone,mango1);
		detectCollision(stone,mango2);
		detectCollision(stone,mango3);
		detectCollision(stone,mango4);
		detectCollision(stone,mango5);
		detectCollision(stone,mango6);
		detectCollision(stone,mango7);
		detectCollision(stone,mango8);
		detectCollision(stone,mango9);
		detectCollision(stone,mango10);
		detectCollision(stone,mango11);
		detectCollision(stone,mango12);

	//fill("green")
  
 // rect(500,425,1000,50);
 
}
function mouseDragged(){
    Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly()
}

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	console.log(distance)
 console.log(lmango.radius+lstone.radius)
	
		if(distance<=lmango.radius+lstone.radius)
	  {
		console.log("detected")
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}
function keyPressed(){
	if(keyCode === "space") {
		Matter.Body.setPosition(stone.body,{x: 250, y: 345})
		slingshot.attach(stone.body);
	}
}


