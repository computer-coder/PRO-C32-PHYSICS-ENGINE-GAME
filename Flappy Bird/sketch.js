const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var obstaclesGroupu
var obstaclesGroupd
var gamestate ='play'
var score=0
var engine, world;
var bird;
var replayImg;
var replay;
var obstacleImg;

function preload() {

}

function setup() {
  createCanvas(1500, 900);
  engine = Engine.create();
  world = engine.world;
  bird = new Bird(324, 234);
  
  bs = createSprite(324, 234,50,50);
  bs.shapeColor='white'
  
obstaclesGroupu = createGroup();
obstaclesGroupd = createGroup();
  
}

function draw() {

  if (gamestate==='play') {

    background("white");
    if (mouseIsPressed===true) {
      bird.body.position.y -= 15;
      bs.y-=15;
    }
    if (mouseIsPressed===false) {
      bird.body.position.y += 5;
      bs.y+=5;
    }
  
    if(obstaclesGroupu.isTouching(bs)){
   gamestate ='end'
  }
  if(obstaclesGroupd.isTouching(bs)){
    gamestate ='end'
   }
   if (frameCount%10===0){
    score+=1
   }
  
    spawnObstaclesup();
    spawnObstaclesdown();


  }
  if (gamestate ==='end'){
    obstaclesGroupu.setLifetimeEach(-1);  
    obstaclesGroupu.setVelocityXEach(0);
    obstaclesGroupd.setLifetimeEach(-1);  
    obstaclesGroupd.setVelocityXEach(0);
    textSize(100)
    text('You Lost',500,300)
    textSize(50)
    text('Your Score was:'+ score,500,400)
    
  }
  
 
  drawSprites();
  bird.display();

}


function spawnObstaclesup(){
  if (frameCount % 100 === 0){
    ru= Math.random() * (1450 - 1000) + 1000; 
    var obstacleu = createSprite(1500,1,100,ru);
    obstacleu.shapeColor='green'
    obstacleu.velocityX = -6;
 
  
    
     //assign scale and lifetime to the obstacle           
     obstacleu.scale = 0.5;
     obstacleu.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroupu.add(obstacleu);
  }
 }
 
 function spawnObstaclesdown(){
  if (frameCount % 100 === 0){
    rd= Math.random() * (1450 - 1000) +1000; 
    var obstacled = createSprite(1500,800,100,rd);
    obstacled.shapeColor='green'
    obstacled.velocityX = -6;
    
     //assign scale and lifetime to the obstacle           
     obstacled.scale = 0.5;
     obstacled.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroupd.add(obstacled);
  }
 }
 
 