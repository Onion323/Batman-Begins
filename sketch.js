const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var drops = []
var thunder1, thunder2, thunder3, thunder4
var maxDrops

function preload(){
 thunder1 = loadImage("thunderbolt/1.png");
 thunder2 = loadImage("thunderbolt/2.png");
 thunder3 = loadImage("thunderbolt/3.png");
 thunder4 = loadImage("thunderbolt/4.png")
    
}

function setup(){
    createCanvas(800,800)
    engine = Engine.create();
	world = engine.world;
    umbrella = new Umbrella(250,500);

    maxDrops = 100;
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)))
    }
}

function draw(){
  rectMode(CENTER);
  background(0);

  for(var i=0; i<maxDrops; i++){
    //drops.push(new Drops(random(0,400),random(0,400)))
    drops[i].display();
}
 umbrella.display();

  drawSprites();
    
}   

