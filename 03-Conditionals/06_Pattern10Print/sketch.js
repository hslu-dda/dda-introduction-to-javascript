let posx = 0;
let posy = 0;
let rectsize = 20;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  fill(random(255), random(255), random(255));
  let rand = random();
  push();
  translate(posx, posy);
  if (rand > 0.5) {
    line(0, 0, rectsize, rectsize);
  } else {
    line(0, rectsize, rectsize, 0);
  }
  pop();

  posx += rectsize;
  if (posx >= width) {
    posx = 0;
    posy += rectsize;
  }
}
