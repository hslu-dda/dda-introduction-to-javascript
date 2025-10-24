let col;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseX > width / 2) {
    col = color("Crimson");
  } else {
    col = color("Coral");
  }
  background(col);
  line(width / 2, 0, width / 2, height);
}
