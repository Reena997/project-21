var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(100,580,175,20);
box2 = createSprite(300,580,175,20);
box3 = createSprite(500,580,175,20);
box4 = createSprite(700,580,175,20);

edgeL = createSprite(0,300,10,600);
edgeR = createSprite(800,300,10,600);
edgeU = createSprite(400,0,800,10);
edgeD = createSprite(400,800,800,10);

edgeR.visible = false;
edgeL.visible = false;
edgeD.visible = false;
edgeU.visible = false;

hitter = createSprite(random(20,750),300,30,30);
hitter.shapeColor = "white";
hitter.velocityX = 5;
hitter.velocityY = 5;

box1.shapeColor = "maroon";
box2.shapeColor = "cyan";
box3.shapeColor = "yellow";
box4.shapeColor = "violet";

    //create box sprite and give velocity

}

function draw() {
    background(0);
    drawSprites();
    createEdgeSprites();
    //hitter.bounceOff(edgeSprites);
    hitter.bounceOff(edgeR);
    hitter.bounceOff(edgeL);
    hitter.bounceOff(edgeU);
    hitter.bounceOff(edgeD);

    if(hitter.isTouching(box1)){
       hitter.shapeColor = "maroon";
       music.play();
       hitter.bounceOff(box1);

    }
    if(hitter.isTouching(box2)){
        hitter.shapeColor = "cyan";
        hitter.velocityX = 0;
        hitter.velocityY = 0;
        music.stop();
        hitter.bounceOff(box2);
 
     }
     if(hitter.isTouching(box3)){
        hitter.shapeColor = "yellow";
        hitter.bounceOff(box3);
 
     }
     if(hitter.isTouching(box4)){
        hitter.shapeColor = "violet";
        hitter.bounceOff(box4);
 
     }
    
    //add condition to check if box touching surface and make it box
}
