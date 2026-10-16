let font;
let points;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  font = await loadFont("assets/SpaceMono-Bold.ttf");
  textSize(250);
  points = font.textToPoints("p5*js", 50, width / 2, { sampleFactor: 0.1, simplifyThreshold: 0 });
}

function draw() {
  background(0);

  let offset = floor(frameCount / 10) % 2; // changes every 10 frames

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    if (i % 2 === offset) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    ellipse(p.x, p.y, 10, 10);
  }
}
