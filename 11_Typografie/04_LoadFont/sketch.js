let fontSize = 100;
let font2;

async function setup() {
  createCanvas(800, 800);
  font2 = await loadFont("fonts/HennyPenny-Regular.ttf");
}

function draw() {
  background(220);
  textFont("Grenze Gotisch");
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Hello World", width / 2, height / 2);

  textFont(font2);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Hello World", width / 2, height / 2 - 100);
}
