let offset = 5;

function setup() {
  createCanvas(500, 500);
  strokeWeight(20);
  noFill();

  // Initialize P5Capture
  P5Capture.setDefaultOptions({
    format: "webm",
    framerate: 30,
    quality: 0.8,
  });
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(MULTIPLY);

  // Magenta circle
  stroke(255, 0, 255);
  ellipse(width / 2 + random(-offset, offset), height / 2 + random(-offset, offset), 200, 200);

  // Cyan circle
  stroke(0, 255, 255);
  ellipse(width / 2 + random(-offset, offset), height / 2 + random(-offset, offset), 200, 200);

  // Yellow circle
  stroke(255, 255, 0);
  ellipse(width / 2 + random(-offset, offset), height / 2 + random(-offset, offset), 200, 200);

  // Apply blur filter
  filter(BLUR, 1);
}
