var climber, climberImage;
var door, doorImage;
var ghost, ghostImage;
var tower, towerImage;
var spooky;




function preload(){

climberImage = loadImage("climber.png")

doorImage = loadImage("door.png")

ghostImage = loadImage("ghost-standing.png")

towerImage = loadImage("tower.png")

spooky = loadSound("spooky.wav")

}

function setup(){
createCanvas(600,600)

tower = createSprite(300,300)  
tower.addImage(towerImage)
tower.velocityY= -3 
  
ghost = createSprite(300,300)
ghost.addImage(ghostImage)
ghost.scale = 0.45




}




function draw(){
background(220);


if (tower.y < 0){
      tower.y = 300
 }
  
  
if(keyDown("space")){
  ghost.velocityY = -10;
  
} 
  
ghost.velocityY = ghost.velocityY + 0.6
  
  
if(keyDown("left")){
  ghost.velocityX = -4;
  
} 
  
  
if(keyDown("right")){
  ghost.velocityX = 4;
  
}   
  
  
spawnObstacles(); 

drawSprites();
}





function spawnObstacles(){

if (frameCount % 250 === 0) {
    var door = createSprite(600,-50,40,10);
    door.x = Math.round(random(100,500));
    door.addImage(doorImage);
    //door.scale = 0.5;
    door.velocityY = 1;
    
     //assign lifetime to the variable
    door.lifetime = 600;
    
    //adjust the depth
    //door.depth = .depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  
    climber = createSprite(600,-3)
    climber.addImage(climberImage)
    climber.velocityY = 1
    climber.x = door.x
}




}



