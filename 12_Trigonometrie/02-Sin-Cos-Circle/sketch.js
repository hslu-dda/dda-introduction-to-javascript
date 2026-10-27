let angle = 0;
let radius = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // halbtransparenter Hintergrund -> Spur bleibt kurz sichtbar
  background(0, 20);

  // cos() ist die x-Position, sin() ist die y-Position auf dem Kreis
  let x = width / 2 + cos(angle) * radius;
  let y = height / 2 + sin(angle) * radius;

  // Hilfslinien: Die beiden Anteile des Punktes
  stroke(100, 200, 200);
  line(width / 2, height / 2, x, y);
  line(x, y, x, height / 2); // sin-Anteil
  line(width / 2, height / 2, x, height / 2); // cos-Anteil

  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 30);

  angle += 0.03; // Winkel in Radiant, TWO_PI ist ein ganzer Kreis

  // ÜBUNG: Mache aus dem Kreis eine Ellipse (zwei verschiedene Radien)
}
