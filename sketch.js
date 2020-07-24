const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var tank;
var shot;
var canonball;
var ground;
var tar;

function setup() {
  createCanvas(1375,600);
  engine = Engine.create();
  world = engine.world;
  tank = new Tanker(900,450,450,250);
  ground = new Ground(1375/2,580,1375,40)
  canonball = new CanonBall(820,380,50,50);
  shot = new Slingshota(canonball.body,{x:830,y:380});
  tar = new Ball(150,550,100,100);
}

function draw() {
  Engine.update(engine);
  background("white");
  tank.display();
  ground.display();
  canonball.display();
  shot.display();
  tar.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(canonball.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    shot.fly();
}