var fruitsGroup,banana,bananaImg,apple,appleImg,avacado,avacadoImg;
var cherry,cherryImg,mango,mangoImg;
var dog , dogImg;

function preload(){
  jungleImg = loadImage('jungl.jpg');
  mangoImg = loadImage('mango.jfif');
  bananaImg = loadImage('banana.png');
  boyImg = loadImage("boy1.JPG");
  dogImg = loadImage("dog1.png");
  appleImg = loadImage("apple.png");
  avacadoImg = loadImage('banana.png');
  cherryImg = loadImage('banana.png');
  
}

function setup(){
  createCanvas(displayWidth, displayHeight);
  background = createSprite(0,displayHeight/2-300, displayWidth/2*5, displayHeight);
  background.addImage('set',jungleImg);
       background.x=background.width/2
  background.scale = 1;
     background.velocityX = -3 
  
}

function draw(){
  
    if (background.x < 30){
      background.x=background.width/2
    }
    animals();
    fruits();
  
  drawSprites();
}

function animals(){
    if(frameCount%100 === 0){
        dog = createSprite(1000,displayHeight/2-210,10,10);
        dog.velocityX = -2;
        dog.scale = 0.2;

        var rand = Math.round(random(1,6))
        switch(rand){
            case 1:dog.addImage(dogImg);
            break;

            case 2:dog.addImage(dogImg);
            break;

            case 3:dog.addImage(dogImg);
            break;

            case 4:dog.addImage(dogImg);
            break;

            case 5:dog.addImage(dogImg);
            break;

            case 6:dog.addImage(dogImg);
            break;
            
            default: break;
        }
    }
}

function fruits(){
  if(frameCount%300 === 0){
      fruit = createSprite(1000,displayHeight/2-350,10,10);
      fruit.velocityX = -2;
      fruit.scale = 0.03;

      var rand = Math.round(random(1,6))
      switch(rand){
          case 1:fruit.addImage(bananaImg);
          break;

          case 2:fruit.addImage(appleImg);
          fruit.scale = 0.5;
          break;

          case 3:fruit.addImage(cherryImg);
          break;

          case 4:fruit.addImage(avacadoImg);
          break;

          case 5:fruit.addImage(mangoImg);
          break;

          case 6:fruit.addImage(bananaImg);
          break;
          
          default: break;
      }
  }
}