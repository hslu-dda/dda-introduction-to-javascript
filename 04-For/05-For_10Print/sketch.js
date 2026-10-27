/*
Data Design + Art, HSLU Lucerne
Play 1
10 PRINT in one frame: two nested for loops build the whole grid at once.
Compare with 03-Conditionals/06_Pattern10Print, where draw() sets one tile per frame.
Click to draw a new pattern.
-----------------------------------------------------------------*/

let rectsize = 20;

function setup() {
  createCanvas(500, 500);
  noLoop(); // draw() runs only once, mousePressed() draws again
}

function draw() {
  background(255);

  // outer loop: one row after the other (y)
  for (let posy = 0; posy < height; posy += rectsize) {
    // inner loop: every tile in this row (x)
    for (let posx = 0; posx < width; posx += rectsize) {
      // flip a coin: "/" or "\"
      let rand = random();
      if (rand > 0.5) {
        line(posx, posy, posx + rectsize, posy + rectsize);
      } else {
        line(posx, posy + rectsize, posx + rectsize, posy);
      }
    }
  }
}

function mousePressed() {
  redraw();
}

// ÜBUNG: Ändere rectsize auf 10 und auf 50. Was passiert mit dem Muster?
// ÜBUNG: Ändere 0.5 auf 0.8. Warum entstehen jetzt Diagonalen in eine Richtung?
// ÜBUNG: Gib jeder Zeile eine eigene Strichstärke (Tipp: strokeWeight() in der äusseren Schleife).
