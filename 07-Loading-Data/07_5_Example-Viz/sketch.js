/*
Data Design + Art
Play 1, HS25
Data from: https://catalog.data.gov/dataset/local-weather-archive/resource/ce4b6000-c949-4be4-9ae9-efde1f8a2fe4
*/

let data;
let maxTemp;
let minTemp;

// use async in front of setup
async function setup() {
    createCanvas(1500, 500);
    background(0);

    // load the data
    data = await d3.json("./data/rdu-weather-history-sorted.json");
    console.log(data);

    // call your drawing functions
    drawTemp();
    drawAxis();
}

function drawTemp() {
    // get the data ranges
    let allMaxTemp = data.map((d) => d.tmax);
    // save in global variables so you can use them for the axis
    maxTemp = max(allMaxTemp);
    minTemp = min(allMaxTemp);

    // inspect them
    console.log("Max Temp:", maxTemp, "Min. Temp", minTemp);

    // loop over the data
    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        // calculate x pos, spread evenly
        let x = map(i, 0, data.length - 1, 50, 1475);
        // calculate the y pos based on temp
        let y = map(element.tmax, minTemp, maxTemp, 450, 25);

        // calculate a colo scale
        // define two colors
        let coldColor = color(119, 172, 220);
        let warmColor = color(255, 56, 96);

        // use lerpColor to blend: https://p5js.org/reference/p5/lerpColor/
        // lerpColor need values between 0-1 > map tmax into a 0–1 range
        let cVal = map(element.tmax, minTemp, maxTemp, 0, 1);

        // lerp the current color
        let currentColor = lerpColor(coldColor, warmColor, cVal);
        fill(currentColor);

        // draw the ellipse
        noStroke();
        ellipse(x, y, 5, 5);

        // create a value label just for the heck of it
        fill(150);
        noStroke();
        textSize(8);
        text(element.tmax, x + 5, y + 3);
    }
}

function drawAxis() {
    stroke(200);

    // vertical axis
    line(50, 25, 50, 450);
    // horizontal axis
    line(50, 450, 1475, 450);

    // vertical labels
    noStroke();
    fill(200);
    textSize(11);
    text(maxTemp, 15, 33);
    text(minTemp, 18, 450);

    push();
    translate(25, 275);
    angleMode(DEGREES);
    rotate(-90);
    text("Max. Temperature", 0, 0);
    pop();

    // horizontal labels
    text("2017", 50, 475);
    text("2022", 1450, 475);
    text("Years", 750, 475);
}
