const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
var pig1;
var pig2;
var log1;
var box3;
var log2;
var box3;
var box4;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
 box1 = new Box(700,320,70,70);
 box2 = new Box(9200,320,70,70)
 ground = new Ground(600,height,1200,20)
 pig1 = new pig(810,350);
 log1 = new log(810,260,300, PI/2);
 box3 = new Box(700,240,70,70);
 box4 = new Box(920,240,70,70)
 pig2 = new pig(810,220);
 log2 = new log(810,180,300, PI/2);
 // console.log(o.position.x);
  // console.log(object.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  log2.display();
  pig2.display();
  

} 