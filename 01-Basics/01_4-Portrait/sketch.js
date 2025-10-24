/*
Data Design + Art, HSLU Lucerne
Introduction to p5
-----------------------------------------------------------------*/

function setup() {
  createCanvas(400, 500);
  noLoop(); // Statisches Bild
}

function draw() {
  // Dunkler Hintergrund
  background(30, 30, 40);

  // Keine Konturen
  noStroke();

  // Hals
  fill(220, 190, 170);
  rect(170, 280, 60, 80);

  // T-Shirt
  fill(40, 50, 70);
  arc(200, 360, 200, 140, 0, PI);

  // Gesicht
  fill(230, 200, 180);
  ellipse(200, 200, 140, 180);

  // Bart
  fill(140, 110, 80);
  arc(200, 235, 130, 110, 0, PI, PIE);

  // Haare
  fill(150, 120, 90);
  arc(210, 140, 140, 120, PI - 0.2, TWO_PI + 0.5, CHORD);

  // Haare - Seiten
  ellipse(130, 170, 50, 60);

  // Ohren
  fill(220, 190, 170);
  ellipse(125, 200, 30, 40);
  ellipse(275, 200, 30, 40);

  // Augen - Weiß
  fill(255);
  ellipse(170, 185, 30, 20);
  ellipse(230, 185, 30, 20);

  // Iris
  fill(150, 180, 200);
  ellipse(170, 185, 15, 15);
  ellipse(230, 185, 15, 15);

  // Pupillen
  fill(40);
  //ellipse(170, 185, 8, 8);
  //ellipse(230, 185, 8, 8);

  // Nase
  stroke(0);
  strokeWeight(2);
  line(207, 180, 207, 190);
  strokeWeight(2);

  line(200, 190, 215, 220);
  line(215, 220, 200, 220);
  noStroke();

  // Augenlider (leicht geschlossen)
  fill(230, 200, 180);
  arc(170, 180, 32, 20, PI, TWO_PI);
  arc(230, 180, 32, 20, PI, TWO_PI);

  // Mund
  fill(180, 120, 110);
  arc(200, 245, 40, 20, 0, PI);
}

// Interaktive Version (optional)
function keyPressed() {
  if (key === "s" || key === "S") {
    save("portrait.png");
  }
}
