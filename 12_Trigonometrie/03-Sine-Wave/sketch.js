let amplitude = 100;
let frequency = 0.02; // wie viele Wellen passen auf den Screen?
let spacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();

  // t verschiebt die Welle, so sieht es aus als würde sie fliessen
  let t = millis() * 0.003;

  for (let x = 0; x < width; x += spacing) {
    let y = height / 2 + sin(x * frequency + t) * amplitude;

    fill(255, 0, 0);
    ellipse(x, y, 8);
  }

  // ÜBUNG: Zeichne eine zweite Welle mit cos() statt sin()
  // ÜBUNG: Addiere zwei Wellen mit verschiedener frequency
}
