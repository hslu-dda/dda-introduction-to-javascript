// State variables
let duration = 2000;
let delay = 80; // offset between two neighbours
let startTimes = [];

let count = 24;
let margin = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // every circle gets its own timer, shifted by i * delay
  for (let i = 0; i < count; i++) {
    startTimes.push(millis() + i * delay);
  }
}

function draw() {
  background(0);
  noStroke();

  let cellW = (width - margin * 2) / count;

  for (let i = 0; i < count; i++) {
    let remaining = startTimes[i] + duration - millis();

    // not started yet -> progress stays 0
    let progress = constrain(map(remaining, duration, 0, 0, 1), 0, 1);

    // 0 -> 1 -> 0 over the duration
    let wave = sin(progress * PI);

    let x = margin + cellW * i + cellW / 2;
    let y = height / 2 - wave * height / 4;
    let size = map(wave, 0, 1, cellW * 0.2, cellW);

    fill(lerpColor(color(255, 0, 0), color(100, 200, 200), i / (count - 1)));
    ellipse(x, y, size);

    // Restart this circle, add duration to avoid drifting
    if (remaining <= 0) {
      startTimes[i] += duration;
    }
  }
}
