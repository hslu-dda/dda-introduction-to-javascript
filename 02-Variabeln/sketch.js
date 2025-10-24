let x = 0;
let y = 10;
let sum = x + y + 10;

function setup() {
  createCanvas(400, 400);
  x = 50;
  y = 10;
  console.log(x, y);
  sum = x + y + 10;
  console.log(sum);
}

function draw() {
  background(220);
  rect(x, y, sum);
}
