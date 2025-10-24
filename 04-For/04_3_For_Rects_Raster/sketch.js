let xPos = 0;
let yPos = 0;
let rectWidth = 50;
let min = 150;
let max = 200;

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  frameRate(30);
}

function draw() {
  // We don't want to draw beyond the canvas edge, so the line break should happen at
  // width-rectWidth. This must also be reflected in the map function
  // so it maps exactly like the xPos range we actually have
  let h = map(xPos, 0, width - rectWidth, min, max);

  fill(h, 100, 100);
  rect(xPos, yPos, rectWidth, rectWidth);
  xPos = xPos + rectWidth;

  // Line break when xPos is greater than width minus rectangle width
  if (xPos > width - rectWidth) {
    xPos = 0;
    yPos = yPos + rectWidth;
  }

  if (yPos > height) {
    xPos = 0;
    yPos = 0;
    // The minimum should become the new maximum and vice versa
    let temp = min;
    min = max;
    max = temp;
  }
}
