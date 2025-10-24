function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(20);
  noLoop();
}

function draw() {
  for (let i = 0; i < 50; i++) {
    textSize(random(10, 40));
    text("🌱", random(width), random(height));
  }

  for (let i = 0; i < 10; i++) {
    textSize(random(10, 20));
    text("🪵", random(width), random(height));
  }
  for (let i = 0; i < 100; i++) {
    textSize(random(30, 50));
    text("🌳", random(width), random(height));
  }

  for (let i = 0; i < 50; i++) {
    textSize(random(40, 60));
    text("🌲", random(width), random(height));
  }
}

function keyPressed() {
  background(255, 50);
  redraw();
}
