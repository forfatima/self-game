var bg, bgImage, pink;
var character, blubby, astra, chimmy, debil, froppy, garfield, hatter, hoodle, hotPuff, nobi, quaky, rosco, rightArrow, rightImg, leftArrow, leftImg,  title, titleImg, play, playImg;
var blubbyImg, astraImg, chimmyImg, debilImg, froppyImg, garfieldImg, hatterImg, hoodleImg, hotPuffImg, nobiImg, quakyImg, roscoImg;
var gameState=0;
var custButton, custButtonImg;
var plus, plusImg;
var minus, minusImg;
var multiply, multiplyImg;
var divide, divideImg;



function preload(){
  bgImage = loadImage("../bg.jpg");
  titleImg = loadImage("../math.png");
  playImg = loadImage("../Images/play.png");
  
  //loading character images
  blubbyImg = loadImage("blubby.png");
  chimmyImg = loadImage("chimmy.png");
  debilImg = loadImage("debil.png");
  froppyImg = loadImage("froppy.png");
  hatterImg = loadImage("hatter.png");
  hotPuffImg = loadImage("hotPuff.png");
  nobiImg = loadImage("nobi.png");
  quakyImg = loadImage("quaky.png");
  roscoImg = loadImage("rosco.png");
  hoodleImg = loadImage("Hoodle.png");
  garfieldImg = loadImage("Garfield.png");
  hoodleImg = loadImage("Hoodle.png");
  astraImg = loadImage("Astra.png");
  custButtonImg = loadImage("customize.png");
  pink = loadImage("pink.jpg");
  plusImg = loadImage("plus.png");
  minusImg = loadImage("minus.png");
  multiplyImg = loadImage("multiply.png");
  divideImg = loadImage("divide.png");

  //loading arrow images
  rightImg = loadImage("right.png");
  leftImg = loadImage("back.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //creating the guide
  

  //creating game title sprite
  title = createSprite(750,300,200,200);
  title.addImage(titleImg);
  title.scale = 0.8;
  title.visible = false;

  //creating play button
  play = createSprite(885,635,50,50);
  play.addImage(playImg);
  play.scale = 0.5;
  play.visible = false;

  //creating customize button 
  custButton = createSprite(580,635,50,50);
  custButton.addImage(custButtonImg);
  custButton.scale = 0.5;
  custButton.visible = false;

  //creating the playing character
  character = createSprite(770, 320, 400, 400);
  character.visible = false;

  //creating avatar
  blubby = createSprite(130,120, 400, 400);
  blubby.visible = false;
  blubby.addImage(blubbyImg);
  blubby.scale = 0.9;

  chimmy = createSprite(505,120, 400, 400);
  chimmy.visible = false;
  chimmy.addImage(chimmyImg);
  chimmy.scale = 0.9;

  astra = createSprite(880,120, 400, 400);
  astra.visible = false;
  astra.addImage(astraImg);
  astra.scale = 0.9;

  debil = createSprite(1255, 140, 400, 400);
  debil.visible = false;
  debil.addImage(debilImg);
  debil.scale = 0.9;

  froppy = createSprite(130, 380, 400, 400);
  froppy.visible = false;
  froppy.addImage(froppyImg);
  froppy.scale = 0.9;

  garfield = createSprite(505, 380, 400, 400);
  garfield.visible = false;
  garfield.addImage(garfieldImg);
  garfield.scale = 0.9;

  hatter = createSprite(880, 380, 400, 400);
  hatter.visible = false;
  hatter.addImage(hatterImg);
  hatter.scale = 0.9;

  hotPuff = createSprite(1255, 380, 400, 400);
  hotPuff.visible = false;
  hotPuff.addImage(hotPuffImg);
  hotPuff.scale = 0.9;

  nobi = createSprite(130, 640, 400, 400);
  nobi.visible = false;
  nobi.addImage(nobiImg);
  nobi.scale = 0.9;

  quaky = createSprite(505, 640, 400, 400);
  quaky.visible = false;
  quaky.addImage(quakyImg); 
  quaky.scale = 0.9;


  rosco = createSprite(880, 640, 400, 400);
  rosco.visible = false;
  rosco.addImage(roscoImg);
  rosco.scale = 0.9;

  hoodle = createSprite(1255, 640, 400, 400);
  hoodle.visible = false;
  hoodle.addImage(hoodleImg);
  hoodle.scale = 0.9;

  //arrows
  rightArrow = createSprite(900, 700, 400,400);
  rightArrow.addImage(rightImg);
  rightArrow.visible = false;

 // leftArrow = createSprite(630, 700, 400, 400);
 // leftArrow.addImage(leftImg);
 // leftArrow.visible = false;

  //creating signs
  plus = createSprite(130, 300, 400, 400);
  plus.visible = false;
  plus.addImage(plusImg);

  minus = createSprite(400, 300, 400, 400);
  minus.visible = false;
  minus.addImage(minusImg);

  multiply = createSprite(650, 300, 400, 400);
  multiply.visible = false;
  multiply.addImage(multiplyImg);

  divide = createSprite(900, 300, 400, 400);
  divide.visible = false;
  divide.addImage(divideImg);
}

function draw() {
  background(bgImage);  
  
  textSize(30);

  if(gameState===0){
    
    title.visible = true;
    play.visible = true;
    custButton.visible = true;
    
    if(mousePressedOver(custButton)){
      custButton.scale = 0.6;
      gameState=1;
      custButton.visible = false;

    }
  
   
  }

  //customize as 1 stage itself
  if(gameState===1){
    background(23,236,225);

    textSize(40);
    fill(95,59,27);
    text("CHOOSE                       YOUR                           CHARACTER!",160,255);

    title.visible = false;
    play.visible = true;
    play.x = 700;
    play.y = 700;

    astra.visible = true;
    blubby.visible = true;
    chimmy.visible = true;
    debil.visible = true;
    froppy.visible = true;
    garfield.visible = true;
    hatter.visible = true;
    hoodle.visible = true;
    hotPuff.visible = true;
    nobi.visible = true;
    quaky.visible = true;
    rosco.visible = true;

    if(mousePressedOver(astra)){
      astra.scale = 1.1;
      
      character.addImage(astraImg);
    }

    if(mousePressedOver(blubby)){
      blubby.scale = 1.1;
      
      character.addImage(blubbyImg);
    }

    if(mousePressedOver(chimmy)){
      chimmy.scale = 1.1;
      
      character.addImage(chimmyImg);
    }

    if(mousePressedOver(debil)){
      debil.scale = 1.1;
      
      character.addImage(debilImg);
    }

    if(mousePressedOver(froppy)){
      froppy.scale = 1.1;
      
      character.addImage(froppyImg);
    }

    if(mousePressedOver(garfield)){
      garfield.scale = 1.1;
      
      character.addImage(garfieldImg);
    }

    if(mousePressedOver(hatter)){
      hatter.scale = 1.1;
      
      character.addImage(hatterImg);
    }

    if(mousePressedOver(hoodle)){
      hoodle.scale = 1.1;
      
      character.addImage(hoodleImg);
    }

    if(mousePressedOver(hotPuff)){
      hotPuff.scale = 1.1;
      
      character.addImage(hotPuffImg);
    }

    if(mousePressedOver(nobi)){
      nobi.scale = 1.1;
      
      character.addImage(nobiImg);
    }
  
    if(mousePressedOver(quaky)){
      quaky.scale = 1.1;
      
      character.addImage(quakyImg);
    }

    if(mousePressedOver(rosco)){
      rosco.scale = 1.1;
      
      character.addImage(roscoImg);
    }

    if(mousePressedOver(play)){
      gameState = 2;
    }
  }

  if(gameState===2){
    background(pink);
    
    //visibility
    character.visible = true;
    play.visible = false;
    astra.visible = false;
    blubby.visible = false;
    chimmy.visible = false;
    debil.visible = false;
    froppy.visible = false;
    garfield.visible = false;
    hatter.visible = false;
    hoodle.visible = false;
    hotPuff.visible = false;
    nobi.visible = false;
    quaky.visible = false;
    rosco.visible = false;
    plus.visible = true;
    minus.visible = true;
    multiply.visible = true;
    divide.visible = true;

    character.x = 175;
    character.y = 590;

    textSize(40);
    fill("white");
    text("CHOOSE YOUR MODE AND TOPIC",370,80);
    
    if(mousePressedOver(plus)){
      plus.x = 100;
      plus.y = 90;
      gameState = 3;
      //minus.visible = false;
      //multiply.visible = false;
     // divide.visible = false;
    }

    if(mousePressedOver(minus)){
      minus.x = 100;
      minus.y = 90;
      gameState = 3;

     // plus.visible = false;
      //multiply.visible = false;
     // divide.visible = false;
    }

    if(mousePressedOver(multiply)){
      multiply.x = 100;
      multiply.y = 90;
      gameState = 3;

      //minus.visible = false;
     // plus.visible = false;
     // divide.visible = false;
    }

    if(mousePressedOver(divide)){
      divide.x = 100;
      divide.y = 90;
      gameState = 3;
      //minus.visible = false;
      //multiply.visible = false;
      //divide.visible = false;
    }

  

  }

  if(gameState===3 && plus.x===100){
    //rightArrow.visible = true;
    minus.visible = false;
    multiply.visible = false;
    divide.visible = false;
    add();
   fill("white");
    

  }


    //customise state
   /*if(gameState===1){
      title.visible = false;
      play.visible = true;
      play.scale = 0.5;

      character.visible = true;
      character.addImage(blubbyImg);
      //leftArrow.visible = true;
      rightArrow.visible = true;
      fill("white");
      textSize(50);
      text("CHOOSE YOUR CHARACTER", 450, 70);

      if(mousePressedOver(rightArrow)){
      gameState = 2;
    }

    if(mousePressedOver(play)){
      gameState= 23;
    } 
  }

  if(gameState===2){
    title.visible = false;
    play.visible = true;
    play.scale = 0.5;

    character.visible = true;
    character.addImage(chimmyImg);
    character.x = 760;
    //leftArrow.visible = true;
    rightArrow.visible = true;
    fill("white");
    textSize(50);
    text("CHOOSE YOUR CHARACTER", 450, 70);

    if(mousePressedOver(rightArrow)&& gameState===2){
    gameState = 3;
  }
   if(mousePressedOver(leftArrow)){
    gameState = 1;
  }
}

if(gameState===3){
  title.visible = false;
  play.visible = true;
  play.scale = 0.5;

  character.visible = true;
  character.addImage(astraImg);
  character.x = 760;
  //leftArrow.visible = true;
  rightArrow.visible = true;
  fill("white");
  textSize(50);
  text("CHOOSE YOUR CHARACTER", 450, 70);

  if(mousePressedOver(rightArrow)&& gameState===3){
  gameState = 4;
}
 if(mousePressedOver(leftArrow)){
  gameState = 2;
}
}

/*if(gameState===4){
  title.visible = false;
  play.visible = true;
  play.scale = 0.5;

  character.visible = true;
  character.addImage(hotPuffImg);
  character.x = 760;
  //leftArrow.visible = true;
  rightArrow.visible = true;
  fill("white");
  textSize(50);
  text("CHOOSE YOUR CHARACTER", 450, 70);

  if(mousePressedOver(rightArrow) && gameState===4){
  gameState = 5;
}
 if(mousePressedOver(leftArrow)){
  gameState = 2;
}
}*/



  drawSprites();
  text(" "+mouseX + " " +mouseY, mouseX, mouseY);

}


function add(){
  background(pink);
   // form = new Form();
    /*var fin = createInput("").attribute("placeholder", "Enter your name",300,300);
    fill("white");
    textSize(50);
    var num = [72956 + 67320, 54300 + 12034, 999999 + 200394, 8897765 + 62450, 6745321 + 345, 768 + 9009, 54023 + 4500, 129 +1203]
    var numb = [456, 2341, 67500, 23509,881, 9, 376, 129, 5555, 99999, 100234, 34256, 7774, 1234, 909231]
    text("72956 + 67320=",300,300);*/
    
    

  
}


 

   
