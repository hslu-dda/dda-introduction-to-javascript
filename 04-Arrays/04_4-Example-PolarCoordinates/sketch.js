// Example data arrays (you can use one or both)
let data = [80, 150, 120, 250, 200, 300, 220, 350];

function setup() {
  createCanvas(800, 400);
  angleMode(RADIANS); // p5 default, here for clarity
}

function draw() {
  background(245);

  // Center of the sunburst
  translate(width / 2, height / 2)

  let innerRadius = 100;
  let angleStep = 360/data.length
  
  for (let i = 0; i < data.length; i++) {
    let d = data[i];
    let angle = angleStep * i;

    let x = innerRadius * cos(angle)
    let y = innerRadius * sin(angle)

    ellipse(x, y, 20, 20)


    
  }

}