var PLAY =1;
var END =0;
var gameState =PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var fruitGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
 createCanvas(600,400);
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  //x small letter in the below line
  ground.x=ground.width/2;
  
 
  fruitGroup= new Group();
  obstacleGroup =new Group();
   
  
survivalTime=0;
score=0;
  
}


function draw() {
  background("white");
  
  fill("black");
  text("survivalTime: "+survivalTime,280,35);
  
  fill("red");
  text("score "+score,500,35);
  if(gameState===PLAY){
     
     survivalTime = 
  survivalTime= 
  survivalTime+ Math.round(getFrameRate()/60);
    
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.9
    monkey.collide(ground);
    
   
    
    if(fruitGroup.isTouching(monkey)){
      score=score+1;
      fruitGroup.destroyEach();
}
    if(obstacleGroup.isTouching(monkey)){
      gameState=END;
    }
  }
  
  else if(gameState===END) {
      
    ground.velocityX =0;
    monkey.velocityY =0;
    
    fruitGroup.setLifetimeEach(-1);
    //in the below line t small letter and also value is -1
    obstacleGroup.setLifetimeEach(-1);
    //in the below line check the spelling of obstacleGroup
    obstacleGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
  
  }
  spawnfruits();
    spawnobstacles();
  drawSprites();
}

function spawnfruits(){
  if (frameCount % 120 === 0) {
    var fruit = createSprite(600,50,40,10);
    fruit.y = Math.round(random(120,200));
    fruit.addImage(bananaImage);
    fruit.scale = 0.08;
    monkey.depth = fruit.depth + 1;
    fruit.velocityX = -3;
    fruit.lifetime=300;
    fruitGroup.add(fruit);
  }
}

function spawnobstacles(){
  if (frameCount % 300 === 0) {
  var obstacle = createSprite(400,325,10,30);
    //sadik check the spelling of velocity and also X capital letter.
   obstacle.velocityX= -6;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;

 
  obstacle.lifetime=300;
  obstacleGroup.add(obstacle);    
  }
}
