/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
*/

let data1 = [80, 150, 120, 250, 200, 300, 220, 350];
let data2 = [100, 130, 180, 200, 240, 280, 260, 300];

function setup() {
    createCanvas(800, 400);
    background(220);

    // Draw axes with 50px margin around the diagram
    stroke(0);
    line(50, 350, 750, 350); // x-axis
    line(50, 50, 50, 350); // y-axis

    // Plot the line graph
    noFill();
    strokeWeight(2);

    // first line: custom shape with vertex
    stroke(0, 0, 255);
    beginShape();
    for (let i = 0; i < data1.length; i++) {
        let d = data1[i];
        // Spread points evenly across the x range (50 → 750)
        let x = map(i, 0, data1.length - 1, 50, 750);
        // Map data1 values to y range (350 → 50, flipped so higher = higher)
        let y = map(d, 0, 350, 350, 50);
        // draw a point of the connected line
        vertex(x, y);
    }
    endShape();

    // draw the second line
    stroke(255, 0, 0);
    beginShape();
    for (let i = 0; i < data2.length; i++) {
        let d = data2[i];
        // Spread points evenly across the x range (50 → 750)
        let x = map(i, 0, data2.length - 1, 50, 750);
        // Map data2 values to y range (350 → 50, flipped so higher = higher)
        let y = map(d, 0, 350, 350, 50);
        // draw a point of the connected line
        vertex(x, y);
    }
    endShape();

    // draw points data1
    strokeWeight(15);
    stroke(0, 0, 255);
    for (let i = 0; i < data1.length; i++) {
        let d = data1[i];
        // Spread points evenly across the x range (50 → 750)
        let x = map(i, 0, data1.length - 1, 50, 750);
        // Map data1 values to y range (350 → 50, flipped so higher = higher)
        let y = map(d, 0, 350, 350, 50);
        // draw a point of the connected line
        point(x, y, 5, 5);
    }

    // draw points data2
    strokeWeight(15);
    stroke(255, 0, 0);
    for (let i = 0; i < data2.length; i++) {
        let d = data2[i];
        let x = map(i, 0, data2.length - 1, 50, 750);
        let y = map(d, 0, 350, 350, 50);
        point(x, y, 5, 5);
    }
}
