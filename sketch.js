const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

function preload(){

}

function setup() {
  createCanvas(500,690);
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(500,10);//250, 680, 
  
  Engine.run(engine); 
}

function draw() {
  background("black");//255,255,255); 
  
  ground.display();
  //console.log("ground");

  
  drawSprites();
}