let a = 3; // Frequenz in x
let b = 2; // Frequenz in y
let radius = 250;
let points = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // phase dreht die Figur langsam
  let phase = millis() * 0.0005;

  stroke(255, 0, 0);
  noFill();
  beginShape();
  for (let i = 0; i <= points; i++) {
    let t = (TWO_PI / points) * i;
    let x = width / 2 + sin(a * t + phase) * radius;
    let y = height / 2 + cos(b * t) * radius;
    vertex(x, y);
  }
  endShape();

  // ÜBUNG: Probiere a und b: (1,1), (3,2), (5,4), (7,3)
}
