let count = 120; // Anzahl Punkte auf dem Ring
let baseRadius = 200;
let amplitude = 40;
let waves = 6; // Anzahl Wellen rund um den Ring

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();

  let t = millis() * 0.002;

  for (let i = 0; i < count; i++) {
    // Winkel dieses Punktes: ein ganzer Kreis geteilt durch count
    let a = (TWO_PI / count) * i;

    // Der Radius schwingt mit sin() -> der Ring "atmet"
    let r = baseRadius + sin(a * waves + t) * amplitude;

    let x = width / 2 + cos(a) * r;
    let y = height / 2 + sin(a) * r;

    fill(lerpColor(color(255, 0, 0), color(100, 200, 200), i / count));
    ellipse(x, y, 12);
  }

  // ÜBUNG: Ändere waves (3, 5, 12). Was passiert?
}
