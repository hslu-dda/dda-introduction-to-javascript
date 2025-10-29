// Variable declarations
let ellipseWidth = 20;
let ellipseHeight = 20;

let xSpeed = 5;
let ySpeed = 9;
let mycolor;

function setup() {
  createCanvas(500, 500);
  pixelDensity(2);
  noFill();
  mycolor = color(255, 0, 0);
  stroke(mycolor);
}

function draw() {
  background(255, 10);

  stroke(mycolor);
  ellipse(width / 2, height / 2, ellipseWidth, ellipseHeight);

  ellipseWidth += xSpeed;
  ellipseHeight += ySpeed;

  if (ellipseWidth > width) {
    xSpeed *= -1;
  }

  if (ellipseWidth <= 20) {
    xSpeed *= -1;
    mycolor = color(random(255), random(255), random(255));
  }

  if (ellipseHeight > height || ellipseHeight < 0) {
    ySpeed *= -1;
  }
}
