
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;

var cropimg,fertiliserimg,heavyrainimg,organicManureimg,pesticideimg;
var pestsimg,ploughimg,seedsimg,soilimg,waterimg,weedsimg;
var seeds,water,fertilisers,organicManure,pesticides,plough;

function preload()
{
	cropimg = loadImage("crop.png");
	fertiliserimg = loadImage("fertilisers.jpg");
	heavyrainimg = loadImage("heavy rain.png");
	organicManureimg = loadImage("organicManure.jpg");
	pesticideimg = loadImage("pesticides.png");
	pestsimg = loadImage("pests.png");
	ploughimg = loadImage("plough.png");
	seedsimg = loadImage("seeds.jpg");
	soilimg  = loadImage("soils.jpg");
	waterimg = loadImage("water.jpg");
	weedsimg = loadImage("weeds.jpg");
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	seeds = createSprite(1100,50,50,50);
	seeds.scale = 0.5;
	seeds.addImage("seeds",seedsimg);
	water = createSprite(1100,160,10,50);
	water.scale = 0.12;
	water.addImage("water",waterimg);
	fertilisers = createSprite(1100,250,50,50);
	fertilisers.scale = 0.5;
	fertilisers.addImage("fertilisers",fertiliserimg);
	pesticides = createSprite(1100,350,50,50);
	pesticides.scale = 0.3;
	pesticides.addImage("pesticides",pesticideimg);
	organicManure = createSprite(1100,450,50,50);
	organicManure.scale = 0.2;
	organicManure.addImage("organicManure",organicManureimg);
	plough = createSprite(1100,600,50,50);
	plough.scale = 0.5;
	plough.addImage("plough",ploughimg);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(soilimg);
  stroke("black");
  textSize(20);
 text("organicManure",1050,515);

  drawSprites();
 
}



