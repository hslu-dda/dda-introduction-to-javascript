function setup() {
  createCanvas(windowWidth, windowHeight);
  circle(0, 0, 20);
  fill(255, 0, 0);
  circle(width, 0, 20);
  circle(width, height, 20);
  circle(0, height, 20);

  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(20, 200));

  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(20, 200));

  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(20, 200));

  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(20, 200));

  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(20, 200));

  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(20, 200));
}

function draw() {
  //background(255);
  //fill(random(255), random(255), random(255));
  //circle(random(width), random(height), random(20, 200));
}
