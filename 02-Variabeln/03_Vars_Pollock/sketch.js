function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  background(255);
}

function draw() {
  //line(random(0,width),random(0,height),random(0,width),random(0,height))
  /*
  //2
  stroke(0,100);
  strokeWeight(1)
  let posX1=random(0,width);
  let posY1=random(0,height);
  let posX2=random(0,width);
  let posY2=random(0,width);
  line(posX1,posY1,posX2,posY2);
  */

  // not working as mouseX, mouseY can go very high
  //let myColor=color(mouseX,mouseY,255,100);

  // we need to remap the mouse values to the range of 255
  // fortunately there is built in map() for that:

  let r = map(mouseX, 0, width, 0, 255, true);
  let g = map(mouseY, 0, height, 0, 255, true);

  let myColor = color(r, g, 255, 100);

  let distance = 200;

  stroke(myColor);
  strokeWeight(5);
  posX1 = random(-distance, distance);
  posY1 = random(-distance, distance);

  // zuerst nur punkte
  posX2 = random(-distance, distance);
  posY2 = random(-distance, distance);

  line(mouseX + posX1, mouseY + posY1, mouseX + posX2, mouseY + posY2);

  noStroke();
  fill(myColor);
  circle(mouseX + posX1, mouseY + posY1, posX2 / 5);
}

function mousePressed() {
  background(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
