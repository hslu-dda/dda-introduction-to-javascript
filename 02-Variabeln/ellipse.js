let x = 0;
let y = 0;
let speedX = 5;
let speedY = 8;

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(255, 10);
  ellipse(width / 2, height / 2, x, y);
  x = x + speedX;
  y = y + speedY;

  /* -> Conditionals! <- */
  if (x > width) speedX = speedX * -1;
  if (x < 0) speedX = speedX * -1;
  if (y > height || y < 0) speedY *= -1;
}
