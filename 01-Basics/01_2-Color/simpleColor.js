function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255, 0, 0, 100);
  rect(100, 100, 100, 100);

  fill(255, 0, 0, 100);
  rect(150, 150, 100, 100);

  fill(0, 0, 255, 100);
  stroke(0);
  strokeWeight(2);
  ellipse(200, 150, 100, 100);
}
