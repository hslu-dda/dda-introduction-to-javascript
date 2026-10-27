let cellW = 30;
let frequency = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();

  let t = millis() * 0.003;

  for (let x = cellW / 2; x < width; x += cellW) {
    for (let y = cellW / 2; y < height; y += cellW) {
      // Abstand zur Mitte -> Wellen breiten sich von der Mitte aus
      let d = dist(x, y, width / 2, height / 2);

      let s = sin(d * frequency - t);
      let size = map(s, -1, 1, 2, cellW);

      fill(255, 0, 0);
      ellipse(x, y, size);
    }
  }

  // ÜBUNG: Nutze s auch für die Farbe oder die Rotation von rect()
  // ÜBUNG: Nimm statt der Mitte die Mausposition (mouseX, mouseY)
}
