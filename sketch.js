var alien,alienImage,alienGroup;
var player,playerImage;
var bossAlien , bossAlienImage;
var bgSound;
var bgImage

function preload(){
     alienImage = loadImage("./images/alien.gif");
     playerImage = loadImage("./images/SpaceShip.png");
     bossAlienImage = loadImage("./images/boss_alien.jpg");
     bgSound = loadSound("./sound_effects/bgm.mp3");
     bgImage = loadImage("./images/bgImage.jpg");

}

function setup(){
    createCanvas(displayWidth , displayHeight);
    player = createSprite(displayWidth/2,displayHeight/2 + 100,100,50);
    player.addImage(playerImage);
    player.scale = 0.2;
}

function draw(){
    background(bgImage);
    bgSound.play();
    spawnAliens();
    

    drawSprites();

}

function spawnAliens(){
    if(frameCount % 80 == 0){
        aliens = createSprite(0,0,50,50);
        aliens.addImage(alienImage);
        aliens.scale = 0.15;
        aliens.x = Math.round(random(100,1000));
        aliens.velocityY = 3;
        aliens.lifetime = 200;
    }
}