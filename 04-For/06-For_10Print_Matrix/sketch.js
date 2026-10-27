/*
Data Design + Art, HSLU Lucerne
Play 1
10 PRINT with the matrix: every tile draws the same line,
push/translate/rotate/pop turns it into "/" or "\".
See also 01-Basics/01_3-Matrix and 03-Conditionals/07_PatternClip.
Click to draw a new pattern.
-----------------------------------------------------------------*/

let rectsize = 40;

function setup() {
  createCanvas(500, 500);
  strokeWeight(3);
  noLoop(); // draw() runs only once, mousePressed() draws again
}

function draw() {
  background(255);

  for (let posy = 0; posy < height; posy += rectsize) {
    for (let posx = 0; posx < width; posx += rectsize) {
      // save the coordinate system
      push();
      // move the origin to the centre of the tile
      translate(posx + rectsize / 2, posy + rectsize / 2);
      // turn the tile by 90 degrees, or not
      if (random() > 0.5) {
        rotate(HALF_PI);
      }
      // always the same line, centred around 0,0
      line(-rectsize / 2, -rectsize / 2, rectsize / 2, rectsize / 2);
      // back to the saved coordinate system
      pop();
    }
  }
}

function mousePressed() {
  redraw();
}

// ÜBUNG: Kommentiere push() und pop() aus. Warum ist das Muster jetzt kaputt?
// ÜBUNG: Ersetze die Linie durch zwei Viertelkreise (Truchet-Muster), mit noFill() in setup():
//        arc(-rectsize / 2, -rectsize / 2, rectsize, rectsize, 0, HALF_PI);
//        arc(rectsize / 2, rectsize / 2, rectsize, rectsize, PI, PI + HALF_PI);
// ÜBUNG: Drehe statt um 90 Grad zufällig um 0, 90, 180 oder 270 Grad (Tipp: floor(random(4)) * HALF_PI).
