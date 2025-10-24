let posX = 0;
let posY = 0;
let posX2 = 0;
let mycolor;
let speed = 10;
let offset = 0;

// Setup function, called once
function setup() {
  createCanvas(500, 500); // Define window size
  background(220);
  //line(200, 50, 400, 400);
  pixelDensity(2);
  mycolor = color(100, 0, 0);
  posX2 = width;
  posY = offset;
}

// draw function, loops continuously
function draw() {
  stroke(mycolor);
  strokeWeight(1);
  line(posX, posY, posX2, posY);
  posY += speed;

  if (posY > height) {
    offset += 1;
    posY = offset;
  }
}
