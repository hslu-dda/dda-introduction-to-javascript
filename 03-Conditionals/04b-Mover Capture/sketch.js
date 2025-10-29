let x = 0;
let y = 0;
let speedX = 5;
let speedY = 2;

function setup() {
  createCanvas(800, 800);
  background(255);

  // Setup p5.capture with default settings
  // It will automatically add a recording button to your canvas
  P5Capture.setDefaultOptions({
    format: "webm",
    framerate: 60,
    quality: 1,
  });
}

function draw() {
  ellipse(x, y, 20);
  x = x + speedX;
  y = y + speedY;

  /* -> Conditionals! <- */
  if (x > width) speedX = speedX * -1;
  if (x < 0) speedX = speedX * -1;
  if (y > height || y < 0) speedY *= -1;
}
