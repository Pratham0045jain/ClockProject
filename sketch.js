
var backgroundImg;
var turntableImg;
var turntable;

function setup() {
  createCanvas(800,400);
  
}

function preload(){
   backgroundImg = loadImage("images/bg.jpg");
   turntableImg = loadImage("images/turntable.png");
}

function draw() {

  

  background(backgroundImg);  
  var hr = hour();
  var min = minute();
  var sec = second(); 
  turntable = createSprite(200,200,10,10);
  image(turntableImg,135,0)
 
  
  angleMode(DEGREES);

  push();
  stroke("red");
  textSize(30);
  fill("yellow")
  text("Thanks Ma'am for teaching me soooooo nicely !!!!!!😊🙏 ", 30,390);
  pop();
 
  translate(400,200);
  rotate(-90);
  
  
  push();
  //translate(400,200);
  //rotate(-90);
  stroke("red");
  strokeWeight(10);
  secAngle = map(sec, 0, 60, 0, 360);
  rotate(secAngle);
  line(0,0,110,0);
  pop();

  

  push();
  //translate(400,200);
  //rotate(-90);
  stroke("blue");
  strokeWeight(10);
  minAngle = map(min, 0, 60, 0, 360);
  rotate(minAngle);
  line(0,0,80,0);
  pop();


  push();
  //translate(400,200);
  //rotate(-90);
  stroke("green");
  strokeWeight(10);
  hrAngle = map(hr%12, 0, 12, 0, 360);
  rotate(hrAngle);
  line(0,0,50,0);
  pop();

  noFill();

  stroke("red");
  strokeWeight(10);
  arc(0,0,320,320,0,secAngle);

  stroke("blue");
  strokeWeight(10);
  arc(0,0,290,290,0,minAngle);

  stroke("green");
  strokeWeight(10);
  arc(0,0,260,260,0,hrAngle);
  drawSprites();

}
