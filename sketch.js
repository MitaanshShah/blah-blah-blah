
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box, box2, ground;

function setup() {
  var canvas = createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  box = new Box(170,300,50,70);
  box2 = new Box(200, 50, 50, 50);

  ground = new Ground(200, 390, 400, 20);
}

function draw() {
  background("#05f735");  
  Engine.update(myEngine);

  box.display();
  box2.display();
  ground.display();
}