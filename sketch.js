// creating variables
var coinIm;
var coin;
var bg;
// creating gamestates
var intro = 0;
var play = 1;
var end = 2;
var score=0;
var gameState = intro;
//var endline, canvas;

 //bg=[bg1,bg2,bg3,bg4,bg5,bg6,bg7.bg8.bg9,bg10];
 
function preload(){

  coinIm=  loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png");

  blastImage=loadImage("blast.png");
  c=loadImage("c8.jpg");
  bg1= loadImage("background1.jpg");
  bg2=loadImage("background2.jpg");
  bg3=loadImage("bg3.jpg");
  bg4=loadImage("bg4.jpg");
  bg5=loadImage("bg5.jpg");
  bg6=loadImage("bg6.jpg");
  bg7=loadImage("bg7.jpg");
  bg8=loadImage("bg8.jpg");
  bg9=loadImage("bg9.jpg");
  bg10=loadImage("bg10.jpg");
  bg11=loadImage("bg11.jpg");
  bg12=loadImage("bg12.jpg");
  bg13=loadImage("bg13.jpg");
  laserImage=loadImage("laser.png");
  o1=loadImage("o1.jpg");
  o2=loadImage("o2.jpg");

    monster=loadAnimation("m1.jpg","m2.jpg","m3.jpg","m4.jpg","m5.jpg");
  }

function setup() {
 

  createCanvas( 1200,800);

  back = createSprite(250, 350, 30, 20);
 // back.addImage(bg1);

 o =createSprite(300,500,60,60);
 o.addImage(o1);
   

  p1 = createSprite(250, 600);
  //p1.debug = true;
  p1.setCollider("rectangle", 70, -27, 5, 265, 156);
  p1.visible = false;
  p2 = createSprite(250, 600);
  p2.setCollider("rectangle", -70, -27, 5, 265, 24);
  //p2.debug = true;
  p2.visible = false;

  monsterGroup = new Group;
  laserGroup = new Group;

   
  //image(background,0,0, 1000,700);
  endline = createSprite(250, 700, 500, 5);
  endline.visible = false;

  

} 
function draw() {
   //background(0);

  if (gameState === intro) {
    background(bg1);

   
     
    
  
    stroke(0,0,51);
    fill(0,0,51);
    textFont("Helvetica")
    textSize(40);
    text("**YOUR PLANET NEEDS YOU! **", canvas.width / 2 - 900, canvas.height / 2 - 600);
    text("ENJOY THE GAME!", canvas.width / 2 - 300, canvas.height / 2 + 100);
 
    stroke(51, 0, 51)
    fill(51, 0, 51);
    textSize(35);
    textFont("Apple Chancery");
    text("YOU ARE IN THE YEAR 2100", canvas.width / 2 - 900, canvas.height / 2 - 500);
    text("  ghosts are coming towards you .", canvas.width / 2 - 800, canvas.height / 2 - 450);
    text("  YOU ARE A SUPER HERO  CAN ONLY USE YOUR POWERS WHEN YOU GET THE MAGIC POTION ", canvas.width / 2 - 1200, canvas.height / 2 - 400);
    text("  BE THE BEST FIGHTER YOU CAN BE ", canvas.width / 2 - 700, canvas.height / 2 - 0);

    noStroke();
    fill("white")
    text("  PRESS 'SPACE KEY' TO SHOOT ", canvas.width / 2 - 300, canvas.height / 2 - 90);
    text("  USE RIGHT & LEFT ARROWS TO MOVE ", canvas.width / 2 - 300, canvas.height / 2 - 50);
    text("  PRESS 's' to START GAME ", canvas.width / 2, canvas.height / 2 - 10);

   
    if (keyDown("s")) {
      gameState = play;
     // background(bg2);
    text(score,)
     var rand = Math.round(random(1, 13));
     console.log(rand);
     switch (rand) {
       case 1: background(bg1);
         //asteroid.setCollider("circle", -80, 10, 160);
         break;
       case 2: background(bg2);
        // asteroid.setCollider("circle", 50, 0, 150);
         break;
       case 3: background(bg3);
       break;
       case 4: background(bg4);
       break;
       case 5: background(bg5);
       break;
       case 6: background(bg6);
       break;
       case 7: background(bg7);
       break;
       case 8: background(bg8);
       break;
       case 9: background(bg9);
       break;
       case 10 : background(bg10);
       break;
       case 11: background(bg11);
       break;
       case 12: background(bg12);
       break;
       case 13: background(bg13);
        // asteroid.setCollider("circle", 0, 0, 170)
       default: break;
     }
   
 
      console.log(gameState);
    }
 

  }
  
}

if (gameState === play) {
  // console.log(frameCount)
  stroke("black");
  fill("white");
  textSize(30);
  text("score : " + score, 210, 60)


  if (frameCount % 110 === 0) {

    var ob = createSprite(Math.round(random(50, 1350)), -20);
    ob.velocityY = (6 + score / 10);
    ob.lifetime = 200;
    ob.scale = random(0.4, 0.5);
    //asteroid.debug = true;

    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1: ob.addImage(o1);
       // asteroid.setCollider("circle", -80, 10, 160);
        break;
      case 2: ob.addImage(o2);
       // asteroid.setCollider("circle", 50, 0, 150);
        break;
       
      default: break;
    }

     
    //camera.position.x=laser.position.x;
    //camera.position.y=laser.position.y;
    //console.log(laser.x);
    shoot = laser.y;
  }

  if (keyDown("right") &&c.x < 1400) {

   c.x =c.x + 10;
    p1.x = p1.x + 10;
    p2.x = p2.x + 10;

  }

  if (keyDown("left") &&c.x > 50) {

   c.x =c.x - 10;
    p1.x = p1.x - 10;
    p2.x = p2.x - 10;

  }

  if (monsterGroup.isTouching(p2) || monsterGroup.isTouching(p1)) {

    monsterGroup.destroyEach();
    var blast = createSprite(spaceShip.x,c.y - 50);
    blast.addImage(blastImage);
    blast.lifetime = 25;
   // explosionSound.play();
    c.destroy();
    gameState = end;

  }
/*
  if (asteroidGroup.isTouching(laserGroup)) {

    asteroidGroup.destroyEach();
    laserGroup.destroyEach();
    //explosionSound.play();
    score = score + 1;

  }
*/
  //asteroids();
  drawSprites();

  
 // if (//enemy.isTouching(endline)) {

    //enemy.destroyEach();
    //gameState = end;

 // }

}


else if (gameState === end) {

  back.velocityY = 0;


  stroke("yellow");
  fill("white");
  textSize(40);
  text("GAME OVER!", canvas.width / 2 - 400, canvas.height / 2);
 // text("The asteroids destroyed the planet", canvas.width / 2 - 400, canvas.height / 2 + 100);
  text("Your final score:" + score, canvas.width / 2 - 400, canvas.height / 2 + 200);
  text("TO RESET YOUR GAME PRESS 'r' ", canvas.width / 2 - 400, canvas.height / 2 + 300);

  if (keyDown("r")) {
    setup();
    gameState = play;
    score=0;
  }
  drawSprites();
}
/*
else if(gameState===2){
 


}
*/ 
 
  
 

  

 
 