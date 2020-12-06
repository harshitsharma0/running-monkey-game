
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale =0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x=ground.width/2
  console.log(ground.x)
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  

  
}


function draw() {
  background("lightgrey");
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  stroke("black")
  fill("black")
  textSize(20)
  text("survivleTime"+score,125,50)
  score=score+1;
console.log(ground.x)
  
  
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  
  if(obstacleGroup.isTouching(monkey)){
        monkey.velocityY = 0;
    ground.velocityX =0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    score=0
  }
  
    
    
  
       
  monkey.collide(ground);
  food();
   spawnobstacles();
  drawSprites();
}
 function food(){
   if(frameCount%80===0){
     banana=createSprite(600,120,20,20)
     banana.y = Math.round(random(120,200))
     banana.addImage(bananaImage)
     banana.scale=0.1;
     banana.velocityX=-6;
     banana.lifetime=390;
     foodGroup.add(banana);
     
     
   }
 }
function spawnobstacles(){
  if (frameCount % 160 === 0){
   var obstacle = createSprite(600,325,10,40);
   obstacle.velocityX = -(6);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1;
     obstacle.lifetime = 390;
    obstacleGroup.add(obstacle);
   
  }
}






