
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var vedge, vedge2;
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var vedge_options ={
     isStatic: true,
   }
   
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  vedge = Bodies.rectangle(100, 200, 200, 20, vedge_options);
  World.add(world,vedge);

  vedge2 = Bodies.rectangle(300, 150, 70, 10, vedge_options);
  World.add(world, vedge2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  Matter.Body.rotate(vedge, angle);
  push ()

  translate (vedge.position.x, vedge.position.y);
  
  rotate (angle);
  rect(0, 0, 100, 20)
  pop ()

  angle+=0.1,
  rect (vedge2.position.x, vedge2.position.y, 70, 10);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}

