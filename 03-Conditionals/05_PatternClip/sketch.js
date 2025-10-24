let posx = 0;
let posy = 0;
let rectsize = 50;
let myColor;
let rotation = 0;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
  myColor = color(70, 200, 240);
}

function draw() {
  rotation += 10;
  let rand = random();
  push();
  translate(posx, posy);
  // beginClip();
  rect(0, 0, rectsize, rectsize);
  // endClip();
  fill(0, 100);

  //rect(0, 0, rectsize, rectsize);
  // fill(myColor);
  // if (rand > 0.75) {
  //   ellipse(rectsize, 0, rectsize * 2);
  // } else if (rand > 0.5) {
  //   ellipse(rectsize, 0, rectsize * 2);
  // } else if (rand > 0.25) {
  //   ellipse(0, 0, rectsize * 2);
  // } else {
  //   ellipse(rectsize, rectsize, rectsize * 2);
  // }

  fill(myColor);
  if (rand > 0.75) {
    push();
    translate(rectsize / 2, rectsize / 2);
    rotate(radians(270));
    triangle(-rectsize / 2, rectsize / 2, 0, 0, rectsize / 2, rectsize / 2);
    pop();
  } else if (rand > 0.5) {
    push();
    translate(rectsize / 2, rectsize / 2);
    rotate(radians(180));
    triangle(-rectsize / 2, rectsize / 2, 0, 0, rectsize / 2, rectsize / 2);
    pop();
  } else if (rand > 0.25) {
    push();
    translate(rectsize / 2, rectsize / 2);
    rotate(radians(90));
    triangle(-rectsize / 2, rectsize / 2, 0, 0, rectsize / 2, rectsize / 2);
    pop();
  } else {
    push();
    translate(rectsize / 2, rectsize / 2);
    triangle(-rectsize / 2, rectsize / 2, 0, 0, rectsize / 2, rectsize / 2);
    pop();
  }

  pop();

  posx += rectsize;
  if (posx >= width) {
    posx = 0;
    posy += rectsize;
  }
  if (posy > height) {
    posx = 0;
    posy = 0;
    myColor = color(random(255), random(255), random(255));
  }
}
