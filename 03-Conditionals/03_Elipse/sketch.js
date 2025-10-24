// Variable declarations
let ellipseWidth = 20;
let diff = 5;
let mycolor;

function setup() {
  createCanvas(500, 500);
  pixelDensity(2);
  noFill();
  mycolor = color(255, 0, 0);
  stroke(mycolor);
}

function draw() {
  // Clear the background on each frame
  background(255);

  stroke(mycolor);
  ellipse(width / 2, height / 2, ellipseWidth, ellipseWidth);

  ellipseWidth += diff;

  if (ellipseWidth > width) {
    diff *= -1;
  }

  if (ellipseWidth <= 20) {
    diff *= -1;
    mycolor = color(random(255), random(255), random(255));
  }
}
