var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1300,600);
  security = new Security()
}

function draw() {
  background(bg);
  //clues();
  security.display();
  textSize(45);
  fill("skyblue");
  stroke("white")
  text("Score: " + score, 470, 50);

  if(score === 3) {
    clear();
    background(bg2)
    fill("black")
    noStroke()
    textSize(60);
    text("TREASURE UNLOCKED",300, 300);
  }

  drawSprites()
}