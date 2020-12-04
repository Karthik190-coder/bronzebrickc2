var frontcover, frontcoverimg;
var Background1,Background1img;
var Background2,Background2img
var Background3,Background3img;
var button1,button1img
var button2,button2img;
var button3,button3img;

var gamestate="scene0";

function preload(){
  
 Background1img=loadImage("Pics/backgroundimg1.jpeg") 
 Background2img=loadImage("Pics/backgroundimg2.jpg") 
 Background3img=loadImage("Pics/backgroundimg3.jpeg") 
 button1img=loadImage("Pics/Play.png")
 button2img=loadImage("Pics/next.png")
 button3img=loadImage("Pics/back.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  

  
  
  
}

function draw() {
  background("green"); 
  // This is scene 0 where front cover will be applied
  if(gamestate==="scene0"){

    button1=createSprite(windowWidth/2,windowHeight/2)
    button1.addImage(button1img)
    button1.scale=0.25

    if(mousePressedOver(button1)){
      console.log("Goint to scene 1");

      gamestate="scene1"
    }
    
  }

  //this is scene 1 where the car accident is depicted and next button is displayed
  if(gamestate==="scene1"){

    Background1=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background1.addImage(Background1img)
    Background1.scale=1.5
    button2=createSprite(windowWidth-80,windowHeight-80)
    button2.addImage(button2img)
    button2.scale=0.25

    if(mousePressedOver(button2)){
      console.log("Goint to scene 1.1");
      gamestate="scene1.1"
      Background1.destroy();
    }
  }
  
// this is scene 1.1 where gravyard scene is depicted and has next/back both buttons
  if(gamestate==="scene1.1"){

    Background2=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background2.addImage(Background2img)
    Background2.scale=2.0

    button2.visible=true;

    button3=createSprite(90,windowHeight-80)
    button3.addImage(button3img)
    button3.scale=0.20

    if(mousePressedOver(button2)){
      console.log("Goint to scene 1.2");

      gamestate="scene2"
    }
    if(mousePressedOver(button3)){
      console.log("Goint to scene 1");

      gamestate="scene1"
    }
  }
  
  if(gamestate==="scene1.2"){

    Background3=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background3.addImage(Background2img)
    Background3.scale=2.0

    button2.visible=true;
    button3=createSprite(90,windowHeight-80)
    button3.addImage(button3img)
    button3.scale=0.20

    if(mousePressedOver(button2)){
      console.log("Goint to scene 1.3");

      gamestate="scene2"
    }
    if(mousePressedOver(button3)){
      console.log("Goint to scene 1.1");

      gamestate="scene1.1"
    }
  }



  drawSprites();
}