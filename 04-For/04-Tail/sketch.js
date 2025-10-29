let posX = [];
let posY = [];
let taillength = 50;

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  for (let i = 0; i < taillength; i++) {
    posX[i] = width / 2;
    posY[i] = height / 2;
  }
}

function draw() {
  background(255);

  /*
  [A][B][C][D][E]
  i = 4: posX[4] = posX[3]  →  [A][B][C][D][D]
  i = 3: posX[3] = posX[2]  →  [A][B][C][C][D]
  i = 2: posX[2] = posX[1]  →  [A][B][B][C][D]
  i = 1: posX[1] = posX[0]  →  [A][A][B][C][D]
*/

  for (let i = posX.length - 1; i > 0; i--) {
    posX[i] = posX[i - 1];
    posY[i] = posY[i - 1];
  }
  posX[0] = mouseX;
  posY[0] = mouseY;
  for (let i = 0; i < posX.length; i++) {
    fill(200, 100, 50);
    ellipse(posX[i], posY[i], 10);
  }
}
