var ISS , ISSimg , bath , bathImg , brush , brushImg , drink , drinkImg , eat , eatImg , gym , gymImg , move , moveImg , sleep , sleepImg
var astronaut


function preload(){
ISSimg = loadImage("iss.png")
bathImg = loadAnimation("bath1.png","bath2.png")
brushImg= loadImage("brush.png")
drinkImg= loadAnimation("drink1.png","drink2.png")
eatImg = loadAnimation("eat1.png","eat2.png")
gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
moveImg = loadImage("move.png","move1.png")
sleepImg = loadImage("sleep.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ISS= createSprite(windowWidth/2,windowHeight/2);
  ISS.addImage("background",ISSimg)
  ISS.scale=0.4

  astronaut = createSprite(windowWidth/2,windowHeight/2+200)
  astronaut.addImage("sleeping",sleepImg)
  astronaut.scale=0.15

  
}

function draw() {
  background(0);  

  if(keyDown("m")){
    astronaut.addAnimation("movement",moveImg)
    astronaut.changeAnimation("movement")
    astronaut.velocityX=4
    astronaut.velocityY=6
  }
  if(keyDown(UP_ARROW)){
    astronaut.addImage("brushing",brushImg)
    astronaut.changeImage("brushing")
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gym",gymImg)
    astronaut.changeAnimation("gym")
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eatImg)
    astronaut.changeAnimation("eating")
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bathImg)
    astronaut.changeAnimation("bathing")
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  //astronaut.bounceOff()

  createEdgeSprites();
  drawSprites();
  
}