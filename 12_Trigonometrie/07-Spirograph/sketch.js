let R = 200; // grosser Kreis
let r = 80; // kleiner Kreis rollt darin
let d = 100; // Abstand des Stifts vom Mittelpunkt des kleinen Kreises

let t = 0;
let points = [];

// Die Kurve schliesst sich nach 2 Runden (r / ggT(R, r) = 80 / 40)
let endAngle = Math.PI * 4; // = 2 * TWO_PI (p5 Konstanten sind hier oben noch nicht verfügbar)

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  // Mittelpunkt des kleinen Kreises
  let cx = (R - r) * cos(t);
  let cy = (R - r) * sin(t);

  // Der Stift dreht sich im kleinen Kreis in die Gegenrichtung
  let px = cx + d * cos(-((R - r) / r) * t);
  let py = cy + d * sin(-((R - r) / r) * t);

  points.push(createVector(px, py));

  // Hilfskreise
  noFill();
  stroke(60);
  ellipse(0, 0, R * 2);
  ellipse(cx, cy, r * 2);
  line(cx, cy, px, py);

  // Die Spur
  stroke(255, 0, 0);
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape();

  t += 0.03;

  // Fertig -> von vorne beginnen
  if (t > endAngle) {
    t = 0;
    points = [];
  }

  // ÜBUNG: Ändere r und d
}
