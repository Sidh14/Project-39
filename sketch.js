var background,backgroundImage,balloon1Image,balloon2Image,balloon3Image,balloon4Image,bow,score=0,arrowGroup;



function preload(){
 //load your images here 
 backgroundImage=loadImage("bg.png");
  balloon1Image=loadImage("pink_balloon0.png");
  balloon2Image=loadImage("green_balloon0.png");
  balloon3Image=loadImage("red_balloon0.png");
   balloon4Image=loadImage("blue_balloon0.png");
  bowImage=loadImage("bow0.png");
  arrowImage=loadImage("arrow0.png")
}

function setup() {
canvas = createCanvas(1200,600);
  
//add code here
 backgrnd=createSprite(600,300,1200,800);
 backgrnd.addImage(backgroundImage);
 backgrnd.scale=1.8;

//backgrnd.x=backgrnd.width/2;
 bow=createSprite(1100,200,15,100);
 bow.scale = 2.0;
 bow.addImage(bowImage);
  
  arrowGroup=createGroup();
  pinkB=createGroup();
  greenB=createGroup();
  redB=createGroup();
  blueB=createGroup();
}

function draw() {
backgrnd.velocityX=-3;
  
 //background(0);
 if(backgrnd.x<200)
 { 
   backgrnd.x=backgrnd.width/2;
 }
  bow.y=mouseY;
  camera.position.y=bow.y;
  
  var select_balloon=Math.round(random(1,4));
  console.log(select_balloon)
  
  if(World.frameCount%80==0){
    if(select_balloon==1){
    pinkBalloon();
    } else if (select_balloon==2) {
      greenBalloon();
    }else if (select_balloon==3) {
      redBalloon();
    }else if (select_balloon==4) {
      blueBalloon();
    }
     }
  
  
  if(keyDown("space")){
    createArrow();
  }
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
  
  
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  drawSprites()
  textSize(85);
  fill("black");
  text("Score : "+score,270,70);

  if(score>=15)
  {
    background("pink");
    textSize(85);
    fill("black");
    text("You Win !!",380,300);
    textSize(55);
    fill("magenta");
    text("MAZEL-TOV",400,380);
  }
}

function createArrow(){
 var arrow=createSprite(360,100,1,1);
  arrow.addImage(arrowImage);
  arrow.x=1000;
  arrow.y=bow.y;
  arrow.velocityX=-4;
  arrow.lifetime=300;
  arrow.scale=0.5;
  arrowGroup.add(arrow);

  
 
}

function pinkBalloon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(balloon1Image);
  pink.velocityX=5;
  pink.lifetime=450;
  pink.scale=2.2;
  pinkB.add(pink);
}

function greenBalloon(){
  var green=createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(balloon2Image);
  green.velocityX=5;
  green.lifetime=450;
  green.scale=0.18;
  greenB.add(green);
}

function redBalloon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(balloon3Image);
  red.velocityX=5;
  red.lifetime=150;
  red.scale=0.18;
  redB.add(red)
}

function blueBalloon(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(balloon4Image);
  blue.velocityX=5;
  blue.lifetime=150;
  blue.scale=0.18;
  blueB.add(blue)
}