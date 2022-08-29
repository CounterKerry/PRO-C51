var innocent, innocentRun, innocentJump, innocentDeath;
var delegate, delegateImg;
var assassin, assassinImg;
var chãoTemporárel;
var chãoTemporárelInvisível;

function preload() {
    innocentRun = loadImage("assets/innocentRun.gif");
    innocentJump = loadImage("assets/innocentJump.gif");
    innocentDeath = loadImage("assets/innocentDeath.gif");
}

function setup() {
    createCanvas(600, 600);
  innocent = createSprite(300, 300, 20, 30);
  innocent.addImage("innocentImg", innocentRun);
  innocent.scale = 2;
  innocent.addImage("innocentJump", innocentJump);

  chãoTemporárel = createSprite(350, 500, 500, 20);

  chãoTemporárelInvisível = createSprite(350, 510, 500, 20);
  chãoTemporárelInvisível.visible = false;
}

function draw() {
    background(51);

    if (keyDown("space")) {
        innocent.velocityY = -5;
    }

    innocent.velocityY += 0.5;
    innocent.collide(chãoTemporárelInvisível);

    drawSprites();
}

