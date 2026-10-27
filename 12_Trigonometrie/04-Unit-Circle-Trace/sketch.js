let angle = 0;
let radius = 100;
let wave = []; // alle bisherigen y-Werte

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  let cx = 200;
  let cy = height / 2;

  // Der Kreis
  noFill();
  stroke(100);
  ellipse(cx, cy, radius * 2);

  // Punkt auf dem Kreis
  let x = cx + cos(angle) * radius;
  let y = cy + sin(angle) * radius;
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 16);

  // Neuester Wert vorne einfügen
  wave.unshift(y);
  if (wave.length > width - 400) {
    wave.pop();
  }

  // Linie vom Punkt zur Welle
  stroke(100, 200, 200);
  line(x, y, 400, wave[0]);

  // Die Welle: der y-Wert des Punktes über die Zeit
  noFill();
  beginShape();
  for (let i = 0; i < wave.length; i++) {
    vertex(400 + i, wave[i]);
  }
  endShape();

  angle += 0.04;
}
