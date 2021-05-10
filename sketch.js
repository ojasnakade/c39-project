  var arrowGroup,bow,arrow,green_balloon,red_balloon,pink_balloon,blue_balloon,
  background;
    
  var bowImage,arrowImage,green_balloonImage,red_balloonImage,
  pink_balloonImage,blue_balloonImage,backgroundImage;

  var score=0;

  var redB,greenB,blueB,pinkB;

  var count=0 

  function preload(){

  backgroundImage = loadImage("background0.png");
  
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  }

  function setup() {
  createCanvas(600, 600);
  
    ground = createSprite(0,0,600,600);
    ground.addImage(backgroundImage);
    ground.scale=3;
    ground.x = ground.width /2;
    ground.velocityX = -4;
    
    
    
  bow = createSprite(580,300,10,10);
  bow.addImage(bowImage);
    
  //for(var i=62;i<390;i=i+60){
 // red_balloon = createSprite(50,i,1,1);
 // red_balloon.addImage(red_balloonImage);
 // red_balloon.scale=0.1;
 // }

 // for(var i=110;i<390;i=i+60){
 // green_balloon = createSprite(100,i,10,10);
 // green_balloon.addImage(green_balloonImage);
 // green_balloon.scale=0.1;
//}
    
  //for(var i=130;i<350;i=i+60){
 // blue_balloon = createSprite(140,i,10,10);
 // blue_balloon.addImage(blue_balloonImage);
 // blue_balloon.scale=0.1;
 // }
    
 // for(var i=180;i<250;i=i+60){
 // pink_balloon = createSprite(180,i,10,10);
//pink_balloon.addImage(pink_balloonImage);
//pink_balloon.scale=1.2;
//}
  arrowGroup= new Group();
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
    

  }
    

 
  function draw() {
 
    background(255);
    
  bow.y=mouseY;
    
    if (ground.x < 0) {
  ground.x = ground.width / 2;
  }
    
 if (keyDown("space")){
   createArrow();
   count++;
 }
    if(count>10){
      arrowGroup.setVelocityXEach(0);
      redB.setVelocityXEach(0);
      greenB.setVelocityXEach(0);
      pinkB.setVelocityXEach(0);
      blueB.setVelocityXEach(0);
      ground.velocityX=0;
      arrowGroup.destroyEach(); 
      redB.destroyEach();  
      greenB.destroyEach();  
      pinkB.destroyEach();  
      blueB.destroyEach();  
    }
    var select_balloon = Math.round(random(1,4));
    
if (World.frameCount % 80 == 0) {
  if (select_balloon == 1) {
    redBalloon();
  } else if (select_balloon == 2) {
    greenBalloon();
  } else if (select_balloon == 3) {
    blueBalloon();
  } else if (select_balloon == 4) {
    pinkBalloon();
  }
}
    
    if (arrowGroup.isTouching(redB)){
      redB.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }
    
    if (arrowGroup.isTouching(greenB)){
      greenB.destroyEach();
      arrowGroup.destroyEach();
      score=score+2;
    }
    
    if (arrowGroup.isTouching(blueB)){
      blueB.destroyEach();
      arrowGroup.destroyEach();
      score=score+3;
    }
    
    if (arrowGroup.isTouching(pinkB)){
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      score=score+4;
    }
    
    drawSprites();
    textSize(20);
    text("Score:"+score,500,50);
  
  }

  function createArrow(){
  arrow=createSprite(500,180,20,20);
  arrow.addImage(arrowImage);
  arrow.velocityX=-6;
  arrow.scale=0.3;
  arrow.y=bow.y
  arrow.lifetime=150;
  arrowGroup.add(arrow);
  }

function redBalloon() {
  var red = createSprite(-20,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX=3;
  red.lifetime=150;
  red.scale=0.1;
  redB.add(red);
}

function greenBalloon() {
  var green = createSprite(-20,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  greenB.add(green);
}

function blueBalloon() {
  var blue = createSprite(-20,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale=0.1;
  blueB.add(blue);
}

function pinkBalloon() {
  var pink = createSprite(-20,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX=3;
  pink.lifetime=150;
  pink.scale=1.2;
  pinkB.add(pink);
}
