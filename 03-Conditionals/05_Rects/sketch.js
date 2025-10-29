let posx = 0;
let posy = 0;
let rectsize = 20;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  fill(random(255), random(255), random(255));
  rect(posx, posy, rectsize, rectsize);

  posx += rectsize;
  if (posx >= width) {
    posx = 0;
    posy += rectsize;
  }
}
