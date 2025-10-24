function setup() {
  createCanvas(400, 400);
  // rectMode(CENTER)
}

function draw() {
  background(220);
  // Aus Ebene pushen
  push();
  // Koordinaten verschieben
  translate(200, 200);
  // Rotieren
  rotate(PI / 4);
  // Zeichnen
  rect(-50, -50, 100, 100);
  rect(0, 0, 100, 100);
  fill("red");
  ellipse(0, 0, 10);
  // Koordinatensystem-dinge wieder löschen
  pop();
  rect(0, 0, 100, 100);
  fill("red");
  ellipse(0, 0, 10);
  fill("white");
}
