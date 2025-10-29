let posX = 0;
let col = 0;

function setup() {
  createCanvas(500, 500);
  background(255);
  frameRate(60);
}

function draw() {
  stroke(col);
  push();
  translate(posX, 0);
  for (let i = 0; i < 10; i++) {
    line((width / 10) * i, 0, (width / 10) * i, height);
  }
  pop();

  posX++;

  if (posX > width / 10) {
    // simulate delay using frameCount
    if (frameCount % 120 === 0) {
      posX = 0;

      col = col === 0 ? 255 : 0;
    }
  }
}
