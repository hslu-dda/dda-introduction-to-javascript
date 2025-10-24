function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
  }
}

function draw() {
  background(220);
  let num = 5;
  let spacing = 100;
  let increment = (width - 2 * spacing) / (num - 1);
  for (let i = 0; i < num; i++) {
    let x = spacing + i * increment;
    ellipse(x, height / 2, 20);
  }
}
