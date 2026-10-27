// Sinus liefert immer einen Wert zwischen -1 und 1
let amplitude = 200; // wie weit schwingt es aus?
let speed = 0.05; // wie schnell schwingt es?

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // frameCount zählt hoch -> sin() schwingt hin und her
  let s = sin(frameCount * speed);

  // s (-1 bis 1) mal amplitude ergibt Pixel
  let x = width / 2 + s * amplitude;

  // map() bringt -1...1 in einen beliebigen Bereich
  let size = map(s, -1, 1, 20, 150);

  fill(255, 0, 0);
  ellipse(x, height / 2, size);

  // ÜBUNG: Ändere amplitude und speed
  // ÜBUNG: Lass die Farbe mit s ihre Helligkeit ändern
}
